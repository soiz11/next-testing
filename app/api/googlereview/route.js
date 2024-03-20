import axios from "axios";

export async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { placeId, apiKey } = req.query; // Assuming the place ID and API key are passed as query parameters

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`
    );
    const data = response.data;

    if (data.status === "OK") {
      const reviews = data.result.reviews || [];
      res.status(200).json(reviews);
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(500).json({ error: "Could not fetch Google reviews" });
  }
}

import Shimmer from "@/components/Shimmer";
import SkeletonBasic from "@/components/SkeletonBasic";
import SkeletonWrapper from "@/components/SkeletonWrapper";

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <SkeletonWrapper customWidths={"w-[200px] lg:w-[300px]"}>
        <div className="w-[100%] flex justify-center">
          <SkeletonBasic skeletonType={"image"} />
        </div>

        <SkeletonBasic skeletonType={"title"} />
        <SkeletonBasic skeletonType={"description"} />
        <SkeletonBasic skeletonType={"description"} />
        <Shimmer />
      </SkeletonWrapper>

      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        class="elfsight-app-122b4cc8-2bb4-4ec0-8e39-ae4674627844"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}

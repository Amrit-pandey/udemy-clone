import { Button } from "@/components/ui/button";
import Link from "next/link";

const InstructorPage = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Become an Instructor</h2>
        <div className="w-full mt-12">
          <div className="px-20">
            <div className="py-16 px-10 border border[2px] border-gray-300 shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-lg">Jump Into Course Creation</h1>
                <Button size="lg" variant="secondary" className="w-[20vw] py-7 ">
                  <Link href={"/course/create"}>Create your course</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-lg">
          <p>
            Based on your experience, we think these resources will be helpful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;

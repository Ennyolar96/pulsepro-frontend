import { BsDot } from "react-icons/bs";
import Blog from "../components/ui/blog";
import { FaAngleRight } from "react-icons/fa";
import { event1 } from "../assets";

export default function SingleBlog() {
  return (
    <div className="container mx-auto px-4 space-y-14">
      <div>
        <h1 className="text-[#A91210] font-bold text-[40px]">News</h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>News</p>
          <FaAngleRight />
          <p>Bill Walsh leadership lesson</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-5">
          <div className="w-full lg:w-1/2">
            <img
              src={event1}
              alt="event title"
              loading="lazy"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div>
            <div className="text-[#A91210] text-sm font-semibold tracking-wide flex items-center">
              <p>Alec Whitten</p>
              <BsDot size={14} />
              <p>1 Jan 2023</p>
            </div>
            <div className="flex items-center">
              <h2 className="text-[#1A1A1A] flex-1 text-lg font-semibold tracking-wide">
                Bill Walsh leadership lesson
              </h2>
            </div>
          </div>
          <div className="leading-8 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
              voluptatum ut sapiente ducimus. Perferendis, tempora, odit dolore
              quae fugiat ducimus recusandae sed distinctio non laborum aliquid.
              Non, rerum deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eveniet aliquam? Ea similique optio beatae dignissimos laborum
              culpa at sapiente, eos molestias quod magni nemo perspiciatis
              quidem, amet, voluptas a?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              veritatis nostrum voluptatum sequi, ut rem temporibus tempore
              explicabo consequatur quo perferendis delectus totam ducimus harum
              suscipit. Numquam impedit minus quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
              voluptatum ut sapiente ducimus. Perferendis, tempora, odit dolore
              quae fugiat ducimus recusandae sed distinctio non laborum aliquid.
              Non, rerum deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eveniet aliquam? Ea similique optio beatae dignissimos laborum
              culpa at sapiente, eos molestias quod magni nemo perspiciatis
              quidem, amet, voluptas a?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              veritatis nostrum voluptatum sequi, ut rem temporibus tempore
              explicabo consequatur quo perferendis delectus totam ducimus harum
              suscipit. Numquam impedit minus quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
              voluptatum ut sapiente ducimus. Perferendis, tempora, odit dolore
              quae fugiat ducimus recusandae sed distinctio non laborum aliquid.
              Non, rerum deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eveniet aliquam? Ea similique optio beatae dignissimos laborum
              culpa at sapiente, eos molestias quod magni nemo perspiciatis
              quidem, amet, voluptas a?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              veritatis nostrum voluptatum sequi, ut rem temporibus tempore
              explicabo consequatur quo perferendis delectus totam ducimus harum
              suscipit. Numquam impedit minus quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
              voluptatum ut sapiente ducimus. Perferendis, tempora, odit dolore
              quae fugiat ducimus recusandae sed distinctio non laborum aliquid.
              Non, rerum deleniti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eveniet aliquam? Ea similique optio beatae dignissimos laborum
              culpa at sapiente, eos molestias quod magni nemo perspiciatis
              quidem, amet, voluptas a?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              veritatis nostrum voluptatum sequi, ut rem temporibus tempore
              explicabo consequatur quo perferendis delectus totam ducimus harum
              suscipit. Numquam impedit minus quo!
            </p>
          </div>
        </div>
        <div className=" md:w-[30%]">
          <Blog
            count={3}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
          />
        </div>
      </div>
    </div>
  );
}

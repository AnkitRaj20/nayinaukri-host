import Image from "next/image";
import NayiNaukri from "../../public/images/logos/NayiNaukari.png"

const Article = () => {
    return (
      <div className="bg-white">
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-dark dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <Image
             src={NayiNaukri} 
             alt="job" 
             width={60}
             height={96}
             className="w-full h-60 sm:h-96 dark:bg-gray-500"/>
           
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-800 text-white">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  If opportunity doesn’t knock, build a door.
                </a>
                <p className="text-xs dark:text-gray-400">
                  By
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                    Milton Berle
                  </a>
                </p>
              </div>
              <div className="dark:text-gray-100">
                <p>Login and find your job now...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Article;
  
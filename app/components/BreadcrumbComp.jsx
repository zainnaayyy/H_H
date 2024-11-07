import { Breadcrumb } from "antd"
import Image from "next/image"
import Link from "next/link"

const BreadcrumbComp = ({img, video, videoSrc, pos, route}) => {
  return (
    <div className="relative w-full mt-10 p-10 rounded-md">
    {video ? (
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-full md:h-[34rem] rounded-md object-cover opacity-50"
      />
    ) : (
      <Image
        priority={true}
        width={1000}
        height={1000}
        src={img}
        alt="img"
        className="w-full h-full md:h-[34rem] rounded-md object-cover"
      />
    )}
    
    <div className={`flex absolute inset-0 flex-col items-${pos} justify-center p-4 sm:p-10`}>
      <div className="text-center ml-7 md:mr-[10rem]">
        <h1 className="text-sm text-primary-darkAqua md:text-4xl lg:text-6xl font-bold mb-4">
          {route}
        </h1>
        <Breadcrumb
          className="text-xs md:text-xl text-white font-semibold py-2 px-4"
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: route,
            },
          ]}
        />
      </div>
    </div>
  </div>
  )
}

export default BreadcrumbComp
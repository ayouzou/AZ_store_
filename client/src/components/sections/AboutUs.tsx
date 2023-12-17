/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iyOgS3D0PTx
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

export default function AboutUs() {
  return (
    <section className="p-8 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h1>
          <span className="text-3xl font-bold text-gray-700 bg-[#d6f0f3] p-2 rounded dark:text-[#19c9e4] dark:bg-[#19c9e4]">
            AZ.
          </span>
        </div>
      </div>
      <div className="mt-6 space-y-6 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 dark:text-gray-300 leading-7 [&:not(:first-child)]:mt-6">
            At the core of our mission is the commitment to revolutionize the online shopping experience through the development of a cutting-edge e-commerce platform. Our vision is to empower businesses, both large and small, by providing them with a robust and intuitive platform to establish and grow their online presence. By building this e-commerce ecosystem, we aim to simplify the complexities of online retail, offering a seamless end-to-end solution that encompasses everything from setting up storefronts to managing products, processing orders, and ensuring a secure and delightful shopping experience for customers. We believe that by enabling businesses to thrive in the digital marketplace, we contribute to economic growth, innovation, and accessibility in the world of online commerce.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Our Team</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <div className=" mx-auto flex gap-11">
              <HoverCard >
                <HoverCardTrigger className="flex items-center gap-2"><Avatar>
                  <AvatarImage alt="Team Member" src="/team/bermime.jpeg"/>
                  <AvatarFallback>Bermime</AvatarFallback>
                </Avatar>
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    Full Stack Developer
                  </code></HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Full Stack Developer</h4>
                      <p className="text-sm">
                        Physics major with a passion for web dev.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger className="flex items-center gap-2"><Avatar>
                  <AvatarImage alt="Team Member" src="/team/zouine.jpeg" />
                  <AvatarFallback>Zouine</AvatarFallback>
                </Avatar>
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    Full Stack Developer
                  </code></HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Full Stack Developer</h4>
                      <p className="text-sm">
                        Computer Science major with a passion for web dev.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <a className="underline text-blue-500 dark:text-blue-300" href="#">
              contact@az.com
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


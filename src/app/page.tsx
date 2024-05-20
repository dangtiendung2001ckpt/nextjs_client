import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Card from "@/components/card";
import ButtonRedirect from "@/app/components/ButtonRedirect";
import {redirect} from "next/navigation";

const isAuth = true
export default function Home() {
    if (!isAuth) {
        redirect('/login')
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {/*<div className="flex-col">
           <Button className={
               'dasd'
           }> 23123 </Button>
           <Input type="text" />
           <h1>Check </h1>
       </div>*/}
        <ButtonRedirect/>
        <Card></Card>
        <h1 className="font-sans text-4xl font-normal text-center">
            Xin chào mọi người
        </h1>
        <Image src='/images/image.jpg'
               alt=''
               width={500}
               height={500}
               quality={100}
        />
        <Image src='https://images.pexels.com/photos/10295057/pexels-photo-10295057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
               alt=''
               width={500}
               height={500}
               quality={100}
        />

    </main>
  );
}

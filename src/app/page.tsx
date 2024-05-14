import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {/*<div className="flex-col">
           <Button className={
               'dasd'
           }> 23123 </Button>
           <Input type="text" />
           <h1>Check </h1>
       </div>*/}

        <Card></Card>
    </main>
  );
}

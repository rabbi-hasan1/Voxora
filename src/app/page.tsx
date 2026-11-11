import { ToastDemo } from "@/components/own/toast-demo"
import {Button} from "@/components/ui/button"
export default function Home(){
  return(
    <div>
      <p className="text-center  my-32">Hello world</p>
      <Button variant="outline">check</Button>
      <ToastDemo />
    </div>
  )
}
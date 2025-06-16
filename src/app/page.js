import Banner from "@/components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <h1>Hello Medicare-Pro</h1>
      <Link href={"/register"}><h5>register</h5></Link>
      <Link href={"/login"}><h5>Login</h5></Link> */}
      <Banner></Banner>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div>
      Friseur App
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Message" />
        <button className="bg-blue-500 text-white p-2 rounded-md w-max"  type="submit">Send</button>
      </form>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export const runtime = "experimental-edge";

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const room = await axios.get(`https://tuft-core-wq7gvvjxpa-el.a.run.app/rooms/${params.id}/preview`);

  return {
    props: { room: room.data.data },
  };
}

export default function RoomPreview({ room }: { room: any }) {
  if (!room) return <div>Room not found</div>;

  return (
    <div className="flex flex-col max-w-[400px] m-auto ">
      <div className="flex flex-col gap-4 h-full p-6">
        <div className="relative mb-10">
          {room.cover_image_url ? (
            <img src={room.cover_image_url} alt="Room cover" className="w-full h-48 object-cover rounded-lg" />
          ) : (
            <div className="w-full h-16"></div>
          )}
          <div className="absolute -bottom-6 left-0">
            <img src={room.avatar || ""} alt="Room logo" className="size-20 rounded-full border-4 border-background" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{room.name}</h1>
          <ReactMarkdown>{room.description || room.short_description}</ReactMarkdown>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            className="w-full"
            onClick={() => {
              window.location.href = "https://app.tuft.in/group/" + room.id;
            }}
          >
            Join Room
          </Button>
          <div className="flex items-center justify-center gap-2">
            <span className="text-muted-foreground text-xs">Powered by</span>
            <img src="/assets/images/long_logo.webp" alt="Tuft" width={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

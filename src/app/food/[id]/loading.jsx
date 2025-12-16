import DetliseLode from "@/components/DetliseLode";

const Loading = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <DetliseLode key={i}></DetliseLode>
      ))}
    </div>
  );
};

export default Loading;

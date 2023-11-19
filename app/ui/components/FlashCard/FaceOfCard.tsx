export default function FaceOfCard({
  word,
  face,
  children,
}: {
  word: any;
  face: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className={`flip-card-${face} flex justify-between items-center`}>
      <div className="w-1/2 text-center">{children}</div>
      <div className="w-1/2 text-center">
        <img
          className="inline-block h-40"
          src={word.photo}
          alt={word.definition}
        />
      </div>
    </div>
  );
}

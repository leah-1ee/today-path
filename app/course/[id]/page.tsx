export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>코스 상세: {params.id}</h1>
    </div>
  );
}

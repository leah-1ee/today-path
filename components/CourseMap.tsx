import { Course } from "@/types/index";

interface CourseMapProps {
  course: Course;
}

// TODO: Google Maps JavaScript SDK 연동 필요
// - Polyline 디코딩 후 코스 경로 표시
// - 화장실 핀 (toilet.svg 아이콘)
// - 공원 입구 핀 (park.svg 아이콘)
// - fitBounds()로 지도 범위 자동 조정

export default function CourseMap({ course: _course }: CourseMapProps) {
  return (
    <div className="w-full h-[240px] bg-surface-container flex items-center justify-center">
      <span className="text-on-surface-variant font-body-md text-body-md">
        지도 준비 중
      </span>
    </div>
  );
}

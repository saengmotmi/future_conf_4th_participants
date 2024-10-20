// 참가자 정보 타입 정의
export interface Participant {
  name: string;
  arrivalTime: string;
  email: string;
  github: string;
  from: string;
  yearsOfExperience: string; // ex. 3~4년차
  introduction: string;
  interests: string[];
}

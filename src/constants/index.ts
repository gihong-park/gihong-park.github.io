export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "/assets/web.png",
  },
  {
    title: "Flutter Developer",
    icon: "/assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "Devops Developer",
    icon: "/assets/creator.png",
  },
];

const technologies = [
  {
    name: "Spring",
    icon: "/assets/tech/spring.png",
  },
  {
    name: "Flutter",
    icon: "/assets/tech/flutter.svg",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "Jenkins",
    icon: "/assets/tech/jenkins.png",
  },
  {
    name: "docker",
    icon: "/assets/tech/docker.png",
  },
  {
    name: "kubernetes",
    icon: "/assets/tech/kubernetes2.png",
  },
];

const experiences = [
  {
    title: "멋쟁이 사자처럼 동아리",
    company_name: "Like Lion",
    icon: "/assets/group/likelion.jpeg",
    iconBg: "#ffffff",
    date: "March 2019 - April 2020",
    points: [
      "멋쟁이사자처럼 at 삼육에서 교육 담당으로 운영진 참여",
      "Django를 이용한 블로그 프로젝트 교육 진행",
      "HTML/CSS 교육 수료",
      "멋쟁이사자처럼 해커톤 참여",
      "삼육대학교 체육대회 / 축제 홈페이지 제작"
    ],
  },

  {
    title: "Google Developer Students Club in Sahmyook",
    company_name: "GDSC",
    icon: "/assets/group/gdsc.webp",
    iconBg: "#F1F3F4",
    date: "Feb 2020 - Aug 2021",
    points: [
      "구글에서 운영하는 커뮤니티로 2020년 부터 코어 멤버로 활동",
      "Flutter 교육 진행: Flutter 기본 레이아웃 교육, 인스타그램 클론 코딩",
      "Golang 스터디 리더: Golang 개요 및 Backend 서버 개발 스터디 진행, 디스코드 봇 프로젝트 진행",
      "Algorithm 스터디 참여: DSC 내 백준 알고리즘 기반 스터디 참여",
      "정원사 프로젝트 개발 참여: 1일 1커밋을 진행하는 깃스터디에 필요한 통계 홈페이지 제작 참여",
    ],
  },
  {
    title: "올드루키",
    company_name: "OLD ROOKIE",
    icon: "",
    iconBg: "#000",
    date: "Mar 2021 - Feb 2022",
    points: [
      "메타버스를 통한 혁신을 꿈꾸는 IT 스타트업",
      "HaFFn 백엔드 개발 및 문서 작성",
      "3D 작업물 R&D",
      "관리자 페이지 제작",
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "삼육대학교 체육대회 / 축제 홈페이지",
    description:
      "체육대회와 축제에 대해서 홍보를 하고 정보를 제공하며, 댓글 추첨 및 온라인 실시간 투표 이벤트를 진행하는 페이지 였습니다. 실시간으로 오류에 대응했으며 많은 깨달음을 준 프로젝트였습니다.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/syufesta.jpg",
    source_code_link: "https://github.com/likelion-syu/syufesta",
  },
  {
    name: "MasterPiece",
    description:
      "MasterPiece는 신진작가나 아마추어 또한 적은 비용으로 작품을 선보일 수 있는 자리를 마련하고자 시작되었습니다. 메타버스를 접목하여서 사용자들에게는 새로운 경험을 줌과 동시에 시장의 불균형을 해소 시킬 수 있을 거라고 예상하였습니다. React-Native 개발을 하면서 Nodejs서버와 통신하였습니다.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aframe",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/masterpiece.png",
    source_code_link: "https://www.syu.ac.kr/blog/%EC%82%BC%EC%9C%A1%E4%BA%BA-%ED%95%99%EC%83%9D-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%A7%88%EC%8A%A4%ED%84%B0%ED%94%BC%EC%8A%A4-%EC%A0%95%EB%B6%80%EC%A7%80%EC%9B%90-%EC%B0%BD%EC%97%85%EB%B9%84-4/",
  },
  {
    name: "HaFFn",
    description:
      "옷을 3D 스캔하여 앱을 통해 보고 싶은 방향 어디든 볼 수 있는 플랫폼, 주로 백엔드를 맡았지만 Flutter 기술 도입을 주도 했기 때문에 Flutter 상태관리와 폴더 구조등 프론트엔드에도 많은 개입을 하였습니다.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "babylonjs",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/haffn.jpeg",
    source_code_link: "https://haffn.com/",
  },
  {
    name: "온라인 부티크 애플리케이션 배포",
    description:
      "Devops 사이드 프로젝트로 Google에서 제공하는 마이크로서비스 예제를 기반으로 DevOps를 구성하였습니다. Jenkins, Argocd, Helm, Kubernetes, Istio를 통해서 구성하였습니다.",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "istio",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/boutique.svg",
    source_code_link: "https://github.com/goorm-k8s-team1/microservices-demo",
  },
];

export { services, technologies, experiences, testimonials, projects };
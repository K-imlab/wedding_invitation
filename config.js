/**
 * Midnight Navy Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김희중",
    nameEn: "Kim Heejung",
    father: "김동년",
    mother: "박향미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김혜주",
    nameEn: "Kim Hyeju",
    father: "김찬호",
    mother: "이현미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-31",
    time: "14:30",
    venue: "마이어스 수원",
    hall: "그레이스 홀",
    address: "경기 수원시 권선구 경수대로 270 터미널동 2층",
    tel: "0507-1402-5500"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
    people: {
      groom: {
        name: "김희중",
        phone: "010-1234-5678",
        intro: "차분하고 따뜻한 마음으로\n사람들과 소통하는 것을 좋아합니다.",
        image: "images/hero/kid_heejung.jpg"
      },
      bride: {
        name: "김혜주",
        phone: "010-8765-4321",
        intro: "여유로운 일상을 좋아하고,\n사람을 편안하게 만드는 것을 좋아합니다.",
        image: "images/hero/kid_hyeju.jpg"
      }
    }
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/621952280",
    naver: "https://naver.me/5WOQ8T7a"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김희중", bank: "우리은행", number: "1002-750-726027" },
      { role: "아버지", name: "김동년", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "박향미", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김혜주", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김찬호", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이현미", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김희중 ♥ 김혜주 결혼합니다",
    description: "2026년 10월 31일, 소중한 분들을 초대합니다."
  }
};

import { ExternalLink } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  url: string;
}

interface PostSection {
  title: string;
  posts: Post[];
}

const sections: PostSection[] = [
  {
    title: "쿠로다 동인 만화",
    posts: [
      {
        id: 1,
        title: "유난-<쿠로다 서막> (4p)",
        url: "https://www.postype.com/@kuroda/post/13903546"
      },
      {
        id: 2,
        title: "유난-<팔각형의 저택 오마주 만화> (9p)",
        url: "https://www.postype.com/@kuroda/post/13903554"
      },
      {
        id: 3,
        title: "림파-<선아와 현> (12p) / 워크숍 <타다이마>",
        url: "https://www.postype.com/@kuroda/post/13943319"
      },
      {
        id: 4,
        title: "유난-<타다이마> (10p) / 워크숍 <타다이마>",
        url: "https://www.postype.com/@kuroda/post/13903580"
      },
      {
        id: 5,
        title: "게스트 미지수-<수녀네컷>(3p)",
        url: "https://www.postype.com/@kuroda/post/14649446"
      },
      {
        id: 6,
        title: "쥬다-<수녀네컷>",
        url: "https://www.postype.com/@kuroda/post/14721296"
      },
      {
        id: 7,
        title: "유난-<수녀네컷>(2p)",
        url: "https://www.postype.com/@kuroda/post/14721302"
      }
    ]
  },
  {
    title: "쿠로다 만화 잡담",
    posts: [
      {
        id: 8,
        title: "1회차 데즈카 오사무 <더 크레이터> 회의록",
        url: "https://www.postype.com/@kuroda/post/13903639"
      },
      {
        id: 9,
        title: "2회차 데즈카 오사무 <불새> 회의록 + 미니코너",
        url: "https://www.postype.com/@kuroda/post/13903883"
      },
      {
        id: 10,
        title: "3,4회차 '영화와 만화' 회의록 + 미니코너",
        url: "https://www.postype.com/@kuroda/post/13904066"
      },
      {
        id: 11,
        title: "워크숍 <타다이마>",
        url: "https://www.postype.com/@kuroda/post/13903975"
      },
      {
        id: 12,
        title: "워크숍 <수녀네컷>",
        url: "https://www.postype.com/@kuroda/post/14473927"
      },
      {
        id: 13,
        title: "7회차 이와아키 히토시 <뼈의 소리> 회의록 + 미니코너",
        url: "https://www.postype.com/@kuroda/post/14473981"
      },
      {
        id: 14,
        title: "8회차 후루야 미노루 <솔티니스> 회의록",
        url: "https://www.postype.com/@kuroda/post/14474098"
      },
      {
        id: 15,
        title: "9회차 <사이버펑크: 엣지러너> 회의록",
        url: "https://www.postype.com/@kuroda/post/14512092"
      },
      {
        id: 16,
        title: "10회차 미조구치 아키코 <BL 진화론> 회의록",
        url: "https://www.postype.com/@kuroda/post/14512000"
      }
    ]
  }
];

export function WorksArchive() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h2 className="mb-4 tracking-tight">Archive</h2>
        <p className="opacity-70">
          View all posts on{' '}
          <a 
            href="https://www.postype.com/@kuroda?activity-type=all" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-60 transition-opacity"
          >
            Postype
          </a>
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="mb-6 opacity-70">{section.title}</h3>
            <div className="space-y-3">
              {section.posts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between py-3 px-5 border border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex-1 pr-4">
                    <p className="group-hover:opacity-60 transition-opacity">
                      {post.title}
                    </p>
                  </div>
                  <ExternalLink className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" size={18} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

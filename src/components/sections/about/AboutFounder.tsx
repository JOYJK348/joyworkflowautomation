'use client';

import Image from 'next/image';
import styles from './AboutFounder.module.css';

const SkillIcons = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  testing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  lifecycle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 16.1A5 5 0 0 1 5.5 8h.5a7 7 0 1 1 8 0h.5a5 5 0 0 1 1.4 8" /><path d="M12 12v9" />
    </svg>
  ),
};

export default function AboutFounder({ dict }: { dict: any }) {
  const f = dict.aboutPage.founder;

  return (
    <section className={styles.section} id="founder">
      <div className={styles.glow_a} />
      <div className={styles.glow_b} />
      
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>{f.tag}</span>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: f.title }} />
          <p className={styles.subtitle}>{f.subtitle}</p>
        </div>

        <div className={styles.layout}>
          {/* Left: Profile Card */}
          <div className={styles.profile_card}>
            <div className={styles.card_header}>
              <div className={styles.dot_red} />
              <div className={styles.dot_yellow} />
              <div className={styles.dot_green} />
              <div className={styles.card_id}>// IDENTITY_CARD</div>
            </div>

            <div className={styles.avatar_wrap}>
              <div className={styles.avatar_frame}>
                <div className={styles.avatar_inner}>
                  <Image 
                    src="/images/JK.jpg" 
                    alt="Jay K" 
                    fill
                    sizes="220px"
                    className={styles.profile_img}
                    priority
                    unoptimized
                  />
                </div>
                <div className={styles.frame_corner_tl} />
                <div className={styles.frame_corner_tr} />
                <div className={styles.frame_corner_bl} />
                <div className={styles.frame_corner_br} />
              </div>
            </div>

            {/* Name & Title */}
            <div className={styles.identity}>
              <h3 className={styles.name}>Jay K</h3>
              <p className={styles.role}>{f.role}</p>
              <div className={styles.status_badge}>
                <span className={styles.status_dot} />
                {f.status}
              </div>
            </div>

            {/* Stats Row */}
            <div className={styles.stats_row}>
              {f.stats.map((stat: any, i: number) => (
                <div key={i} className={styles.stat_item}>
                  <span className={styles.stat_value}>{stat.value}</span>
                  <span className={styles.stat_label}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <div className={styles.linkedin_wrap}>
              <span className={styles.linkedin_count}>{f.linkedin.count}</span>
              <a
                href="https://www.linkedin.com/in/jay-kumar-s"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin_btn}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {f.linkedin.btn}
              </a>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className={styles.content}>
            {/* Bio */}
            <div className={styles.bio_block}>
              {f.bio.map((para: string, i: number) => (
                <p 
                  key={i} 
                  className={styles.bio_text} 
                  dangerouslySetInnerHTML={{ __html: para }} 
                />
              ))}
              
              <figure className={styles.quote}>
                <div className={styles.quote_bar} />
                <p dangerouslySetInnerHTML={{ __html: f.quote }} />
              </figure>
            </div>

            {/* Skills */}
            <div className={styles.skills_block}>
              <div className={styles.skills_header}>
                <span className={styles.skills_tag}>{f.skillsTitle}</span>
              </div>
              
              <div className={styles.skills_grid}>
                {f.skills.map((sk: any, i: number) => (
                  <div key={i} className={styles.skill_chip}>
                    <span className={styles.skill_icon}>
                      {SkillIcons[sk.icon as keyof typeof SkillIcons]}
                    </span>
                    <div className={styles.skill_info}>
                      <span className={styles.skill_label}>{sk.label}</span>
                      <span className={styles.skill_desc}>{sk.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

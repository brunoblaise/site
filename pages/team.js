import { Box, Container, Text, Grid } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Bio from '../components/bio'

export default function Team() {
  return (
    <>
      <Box as="main" key="main">
        <Nav light />
        <Meta
          as={Head}
          title="Team"
          description="Meet the team that runs Hack Club, a global nonprofit network of high school computer science clubs."
        />
        <Box
          pt={6}
          pb={5}
          px={[2, 4]}
          sx={{ background: theme => theme.util.gx('#24B5A5', '#1E9789') }}
        >
          <Container>
            <Text variant="ultratitle" color="snow">
              By the students,
              <br /> for the students.
            </Text>

            <Text
              as="div"
              variant="lead"
              color="smoke"
              sx={{ maxWidth: '650px' }}
            >
              We believe in a world where every young person is empowered to be
              the change they want to see around them. At Hack Club, we’re
              working hard to make it reality.
            </Text>
          </Container>
        </Box>
        <Box bg="#f9f9fa" py={4}>
          <Container>
            <Grid columns={[1, null, 2]} gap={4}>
              <Bio
                img="/team/zach.jpg"
                name="Zach Latta"
                teamRole="Founder"
                text="Zach dropped out of high school after his freshman year to work in the technology industry and had over 5 million people using his software by the time he turned 17. He founded Hack Club to build the program he wish he had in high school and has been awarded the Thiel Fellowship and Forbes 30 Under 30 for his work."
                pronouns="he/him"
              />
              <Bio
                img="/team/christina.jpg"
                name="Christina Asquith"
                teamRole="Co-founder and COO"
                text="With more than a decade of experience in nonprofit management, Christina has built global teams and raised millions of dollars.  Before joining Hack Club, she founded & served as editor-in-chief of Fuller Project, an award-winning journalism nonprofit, which had the TIME Magazine cover story in 2019. She has 20 years experience as a journalist, including reporting for The New York Times from Iraq.  She has an MA in education, and taught as a public school teacher in 2000, which inspired her book “The Emergency Teacher.”                "
                pronouns="she/her"
              />
              <Bio
                img="/team/max.jpg"
                name="Max Wofford"
                teamRole="Tech & Creative Lead"
                text="After teaching himself to code in junior year of high school, Max joined a group of nomadic hackers in Costa Rica to experience coding in a real-world setting. He has been with Hack Club since day one and is now working full-time in Vermont to grow the movement."
                pronouns="he/him"
              />
              <Bio
                name="Kara Massie"
                teamRole="Clubs & Community Production Lead"
                text="Before joining Hack Club, Kara was a lead producer at Activision, shipping Crash Bandicoot N. Sane Trilogy and Bungie's Destiny 2 expansions. She’s deeply committed to inclusivity in gaming and tech spaces, and is beyond thrilled to be part of an org with kindness at its core. She has lived in 3 countries and names her pets after vegetables."
                img="/team/kara.png"
                pronouns="she/her"
              />
              <Bio
                name="Leo McElroy"
                teamRole="Clubs Lead"
                text="Leo builds digital systems, physical tools, and communities to help people express themselves and pursue their curiosity. He's created tools for democratizing personal automation (including programming languages for designing stuff), travelled the world visiting makerspaces on a Watson Fellowship, and created and ran a few makerspaces himself."
                img="/team/leo.png"
                pronouns="he/him"
              />
              <Bio
                name="Holly Delisle"
                teamRole="Club Operations Lead"
                text="Holly comes to Hack Club with 10 years of operations management in the banking industry, bringing people together and simplifying processes. She's lived in Maine and Vermont in intervals all her life and loves the outdoors in every season. Now, Holly meets and works with amazing, inspiring technical teenagers every day from around the world. She's got two sons, two dogs and two cats, the latter of which are all named after characters in some of her favorite books."
                img="/team/holly.jpeg"
                pronouns="she/her"
              />
              <Bio
                name="Kognise"
                teamRole="Special Projects and Hiring"
                text="Always driven by curiosity for how things work, Kognise fell in love with Hack Club in 2019 after joining a Hack Night call and discovering like-minded individuals. They spend their time programming, making music, and studying for their private pilot license; at Hack Club, they support hiring and contribute to various projects."
                img="https://media.kognise.dev/other-avatars/bean-man.jpg"
              />
              <Bio
                name="Caleb Denio"
                teamRole="Bank Engineer"
                text="Caleb is a New Hampshire-born coder with a passion for music and homemade food. He enjoys building wacky, creative projects, configuring linters, and hanging out in the Hack Club community. At Hack Club Bank, he writes code that makes money go 'cha-ching!'"
                img="/team/caleb.jpg"
                pronouns="he/him"
              />
              <Bio
                name="Ella Xu"
                teamRole="Bank Engineer"
                text="Ella joined the Hack Club community after learning about Hack Club Bank from a project running on Bank. Since then, she has contributed to Bank itself in addition to other Hack Club open source projects on GitHub."
                img="https://scrapbook.hackclub.com/ella.png"
                pronouns="she/her"
              />
              <Bio
                name="Melanie Smith"
                teamRole="Bank Operations Lead"
                text="Melanie grew up in northern New England where she obtained a degree in Marine Biology. She then spent several years running a pet store with 20+ employees and recently decided to change career paths. This led her to Hack Club where she is excited about helping students pursue their dreams."
                img="/team/mel.png"
                pronouns="she/her"
              />
              <Bio
                name="Liv Cook"
                teamRole="Bank Operations"
                text="Liv recently graduated from the University of Vermont, where she studied health policy and gained experience as a writing fellow and business assistant. Originally from New York City, she is always eager to be one in a fast-paced community of diverse thinking and grand ideas. Supporting projects and makers with incredible goals is her favorite part about being at Hack Club."
                img="/team/liv.png"
                pronouns="she/her"
              />
              <Bio
                name="Belle See"
                teamRole="Engineer for Comms"
                text="Belle enjoys building for her community, whether that be through developing websites or planning programs and events. She is excited to make Hack Club a better place for students around the world and looks forward to learning from the team at Hack Club!"
                img="https://github.com/bellesea.png"
                pronouns="she/her"
              />
              <Bio
                name="Bence Beres"
                teamRole="Bookkeeper"
                text="Bence is responsible for keeping accurate financial books for HQ and every org on Hack Club Bank (40,000+ transactions in the last year!)."
                img="/team/bence.png"
                pronouns="he/him"
              />
            </Grid>
            <br />
            <Text variant="title" color="orange" sx={{ lineHeight: '1.75em' }}>
              Student Team
            </Text>
            <Grid columns={[1, null, 2]} gap={4}>
              <Bio
                name="Gary Tou"
                teamRole="Bank Engineering"
                text="Gary is a software engineer from Seattle and loves photography! After using Hack Club Bank to launch a nonprofit organization, Gary joined Hack Club to make the product that enabled him to do great things even greater for others."
                img="https://assets.garytou.com/profile/GaryTou.jpg"
                pronouns="he/him"
              />
              <Bio
                name="Kunal Botla"
                teamRole="Bank Operations"
                text={`Kunal loves to make for making! He started Project Boom to help provide computers, helps build and run Hack Club Bank, and is organizing MAHacks for a post-pandemic world. He takes photos to tell stories of an ever-changing world.`}
                img="https://github.com/kunalbotla.png"
                pronouns="he/him"
              />
              <Bio
                name="Arianna Martinelli"
                teamRole="Bank Operations"
                text={`Arianna is a Hack Clubber from Kentucky excited about how technology and humans can work together to solve problems. She joined Hack Club in 2020 to start a club at her all-girls high school and to learn from a community of fellow coders, and she joined Hack Club Bank in 2021 to fiscally sponsor her non-profit Tandem. She loves swimming, trees, videography, film photography, reading Joan Didion, Formula 1, making memes, and crafting cards with puns.`}
                img="https://cloud-oubklmp6c-hack-club-bot.vercel.app/0arianna_profile_photo.png"
                pronouns="she/her"
              />
              <Bio
                name="Deven Jadhav"
                teamRole="Bank Operations (APAC)"
                text="Deven is a Hack Clubber from India who enjoys building meaningful things at the intersections of art and technology. He also loves music and plays the guitar & drums! Along with this, he also likes talking to strangers over the internet and having interesting & deep conversations. He is also a sucker for nature photography and enjoys hikes and treks into the wild!"
                img="https://github.com/devenjadhav.png"
                pronouns="he/him"
              />
              <Bio
                name="Sam Poder"
                teamRole="Engineering & Operations"
                text={`Originally from Australia, Sam's family moved to Singapore when he was young. He now runs a Hack Club at his school in Singapore. 
Sam has worked on all sorts of Hack Club projects, focusing on web development and logistics. Outside of Hack Club, Sam enjoys traveling with his family 
and participating in academic competitions with his friends.`}
                img="https://change-my-pfp.vercel.app/api/current/"
                pronouns="he/him"
              />
              <Bio
                name="Hugo Hu"
                teamRole="Mail Coordinator & Engineering"
                text="Hugo manages Hack Club’s mail. His responsibilities include designing magical mail experiences, negotiating with carriers, and writing mail-related software. He's also involved in many of Hack Club's special projects, such as Sprig & Assemble. Hugo also enjoys designing hardware, competing in math competitions, and admiring corgis."
                img="https://scrapbook.hackclub.com/hugo.y.hu935.png"
                pronouns="he/him"
              />
              <Bio
                name="Abby Fischler"
                teamRole="Technical Intern to COO"
                text={`Abby is a high school junior from Los Angeles that loves technology! Since joining the Hack Club community in May 2020, she’s enjoyed learning with friends in the Slack and on board the Hacker Zephyr. She joined Hack Club to support Christina’s work in encouraging more girls to get involved. Abby has hosted events for the community and loves sharing her coding journey on the #ship channel.`}
                img="https://github.com/abbyfischler.png"
                pronouns="she/her"
              />

              <Bio
                name="Claire Wang"
                teamRole="Community Team"
                text="Claire works on the Community Team and was a previous summer intern. She hopes to make the community both more welcoming and more technical, as well as inspire beginners to love STEM and making. She first joined Hack Club in 8th grade because of an online competition, and has been running a Hack Club ever since then. In addition to CS, she loves neuroscience, sci-fi, debate, and creating Spotify playlists."
                img="/team/claire.png"
                pronouns="she/her"
              />

              <Bio
                name="Rishi Kothari"
                teamRole="Community Team"
                text="Rishi is a high school senior that's super interested in open-source development, startups, React, and everything in between! He is primarily a JS/TS dev, but has worked with Rust 🔥, C++ 💖, Haskell ⚡️, and Swift 🏎 in the past. He is the president of TFSS' Hack Club and a workshop coordinator at TurnerHacks, among other things."
                img="https://github.com/rishiosaur.png"
                pronouns="he/him"
              />
            </Grid>
            <br />
            <Text variant="title" color="orange" sx={{ lineHeight: '1.75em' }}>
              Part Time
            </Text>
            <Grid columns={[1, null, 2]} gap={4}>
              <Bio
                img="/team/chris.jpg"
                name="Chris Walker"
                teamRole="Hacker Resources"
                text="Chris started programming games in middle school, a hobby that developed into a deep passion for educational software. In 2013 he accepted a Thiel Fellowship and moved to San Francisco, where he watched Hack Club grow from an early stage. He worked on Hack Club’s learning resources & clubs program for two years."
                pronouns="he/him"
              />
              <Bio
                name="Woody Keppel"
                teamRole="Club Alchemist"
                text={`Woody is a film actor, musician, comedian, band leader, event producer, and convener of fun. He founded Vermont’s Festival of Fools, The Feast of Fools, The Hawaiian Vaudeville Festival, and the artist retreat & concert venue known as Mt. Foolery. For Woody, “putting on events has always been one of my great pleasures. I’ve also had the privilege of sharing my time with the elderly as well as mentoring middle & high schools students in Vermont. Being part of the Hack Club community has opened my eyes & heart to so much that is possible. It’s a great adventure we’re all on, and we’re here to light the way for each other. Shine on!”`}
                img="/team/woody.jpg"
                pronouns="he/him"
              />
            </Grid>
            <br />
            <Text variant="title" color="orange" sx={{ lineHeight: '1.75em' }}>
              Acknowledgements
            </Text>
            <Grid columns={[1, null, 2]} gap={4}>
              <Bio
                name="Cedric Hutchings"
                teamRole="Clubs Constructionist"
                text="Already more at home on the internet than anywhere in meat space, you can imagine a young Ced's horror when his parents moved him into a holler so deep in the Appalachian Mountains that his beloved internet was only accessible through sluggish satellite. Stubbornly refusing to be separated from his online games, he threw together his own for his brothers, a captive audience. At Hack Club, Ced made materials that shared his enthusiasm for making fun somethings from nothing but technology."
                img="/team/ced.png"
                pronouns="he/him"
              />
              <Bio
                img="/team/athul.jpg"
                name="Athul Blesson"
                teamRole="APAC Director"
                text="Athul started dozens of the largest Hack Clubs in India. After graduating from high school, he joined Hack Club as the Regional Manager of the Asia-Pacific & Africa team where he actively managed hundreds of clubs. Then, as the APAC Director, Athul lead the APAC HQ team dedicated to supporting all of the clubs in the APAC region."
                pronouns="he/him"
              />
              <Bio
                name="Harsh Bajpai"
                teamRole="Clubs Lead"
                text="Harsh is a vegetarian musician who enjoys traveling around India. As the APAC Clubs Lead, Harsh welcomed new clubs to the community and built amazing tools for them. When he is not reading ancient mythology, he is programming with purpose and passion."
                img="/team/harsh.png"
                pronouns="he/him"
              />
              <Bio
                name="Annlee Fores"
                teamRole="Operations"
                text="As the COO of Hack Club APAC, Annlee oversaw operations and handled event organisation & logistics at Hack Club APAC.
When not busy juggling different tasks he takes up, he enjoys tinkering & building fun projects."
                img="/team/annlee.jpg"
                pronouns="he/him"
              />
              <Bio
                name="Anna Grace Benny"
                teamRole="Clubs Lead"
                text="Anna is a visual communication graduate and a social media enthusiast. She loves films and everything related. Managing and meeting new Hack Clubbers as the APAC Clubs Lead, she helped with onboarding new clubs and managed the APAC social media pages."
                img="/team/anna.png"
                pronouns="she/her"
              />
              <Bio
                name="Ishan Goel"
                teamRole="2022 Summer Communications Intern"
                text="Ishan was a summer intern from Seattle! During the summer of 2022, he worked on shipping projects with partners to get the word out about Hack Club, and bring more people into the community."
                img="https://github.com/quackduck.png"
                pronouns="he/him"
              />
              <Bio
                name="Jessica Card"
                teamRole="Education Engineer"
                text="Jessica is a self taught programmer originally from Alaska. She worked for over a decade as a software engineer at startups like GitHub and Bugsnag in San Francisco. She then left the web development world to learn how to make video games. At Hack Club, Jessica brought her creative energy to an array of projects! Most notably, when she learnt Assembly along with Hack Clubbers to produce Some Assembly Required."
                img="/team/jessica.jpg"
                pronouns="she/her"
              />
              <Bio
                name="Zach Fogg"
                teamRole="Community Game Designer"
                text="At college, Zach Fogg started Bitcamp, one of the largest & longest-running annual college hackathons. He then went on to work as a software engineer in SF and mentor many more student hackathons. Zach joined the team at HQ in early 2021, he went on to bring his energy to the community and hack on countless creative projects (such as the Zephyrnet, which he then maintained as it traveled across the US)."
                pronouns="he/him"
                img="/team/zfogg.jpg"
              />
              <Bio
                img="/team/matthew.jpg"
                name="Matthew Stanciu"
                teamRole="Clubs"
                text="After leading a successful Hack Club in West Lafayette, Indiana, & organizing multiple hackathons with Hack Club Bank, Matthew joined the team to lead the clubs program. He wrote curriculum, helped mentor club leaders around the world, & in spring 2020 drove across the U.S. to visit clubs."
                pronouns="he/him"
              />
              <Bio
                img="/team/lachlan.jpg"
                name="Lachlan Campbell"
                teamRole="Storytelling"
                text="Lachlan joined as a club leader from State College, PA to make hackclub.com. 3 years later, as Head of Storytelling, they work on Hack Club’s website, design, frontend, open source, & communications. They’re currently on COVID leave from NYU ’23, majoring in Interactive Media Arts."
                pronouns="they/them"
              />
              <Bio
                img="/team/scott.jpg"
                name="Scott Motte"
                teamRole="Hack Club Bank"
                text="After teaching himself to code in college, Scott went on to lead an exciting software life with multiple startups. Now a father, he joined Hack Club to help build the program he wants available to his children—when they reach high school age."
                pronouns="he/him"
              />
              <Bio
                img="/team/tina.jpg"
                name="Tina Soriano"
                teamRole="Assistant"
                text="Philippine bred and settled with family in the U.S., Tina shifted her career from marketing and film production to teaching kids in the Clark County School District. At Hack Club, she helped thousands of high school students hack their way to a fabulous future."
                pronouns="she/her"
              />
              <Bio
                img="/team/dina.jpg"
                name="Dina Elhanan"
                teamRole="2020 Summer Intern"
                text="Dina started a club in Canada in 2018. Since then she’s run a local hackathon, organized club events & trips, and spoke at Hack Club’s Flagship 2019 Summit. After graduating high school, Dina joined HQ as a ✨Vibes Influencer✨ summer intern. She now studies Electrical Engineering at McMaster University, class of 2024."
                pronouns="she/her"
              />
              <Bio
                img="/team/theo.jpg"
                name="Theo Bleier"
                teamRole="Special Projects"
                text="Theo, a high schooler, joined the Hack Club community in Summer 2018 after reading about Bank online. Since then, he’s run multiple events on Bank & worked on coding it. In 2020, Theo worked on AMAs & distributing laptop grants to students."
                pronouns="he/him"
              />
              <Bio
                img="/team/mingjie.jpg"
                name="Mingjie Jiang"
                teamRole="Community"
                text="Mingjie started working with Hack Club in July 2017, while leading his club in Rockville, Maryland, working on community engagement & public identity. He’s also run Hack Chicago, CodeDay, and countless other hackathons to spread his passion for technology."
                pronouns="he/him"
              />
              <Bio
                img="/team/linus.jpg"
                name="Linus Lee"
                teamRole="Hack Club Bank"
                text="Linus spends most of his free time working on side projects ranging from an audio travel diary to creative coding tools to his own programming language. He brought his experience in product & community from Cal Hacks & Dorm Room Fund to grow Hack Club Bank."
                pronouns="he/him"
              />
              <Bio
                img="/team/fernanda.jpg"
                name="Fernanda Lozano"
                teamRole="Flagship"
                text="Fernanda is a student of computational neuroscience, entrepreneur, & organizer of events like the Entrepreneurial Learning Academy for students in Mexico. In summer 2019, she helped organize the Flagship Summit in San Francisco."
                pronouns="she/her"
              />
              <Bio
                img="/team/michael.jpg"
                name="Michael Destefanis"
                teamRole="Hack Club Bank"
                text="After graduating high school, Michael moved to California where he began working with Hack Club. He handled the day-to-day operations of Hack Club Bank from its start starting to its first million dollars in transactions."
                pronouns="he/him"
              />
              <Bio
                img="/team/amogh.jpg"
                name="Amogh Chaubey"
                teamRole="Community + Events"
                text="Amogh is all about having fun. Whether it’s running an art showcase on the Slack or massive Kahoots at hackathons, he loves to run awesome events. Amogh joined HQ to run spectacular community events, to make Hack Club the best place to be a teenager on the internet, and as Hack Club’s second best rapper."
                pronouns="he/him"
              />
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer light key="footer" />
    </>
  )
}

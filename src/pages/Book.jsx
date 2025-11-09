import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Slugify chapters for matching anchors in sidebar & body
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\- ]+/g, "")
    .replace(/\s+/g, "-");
}

export default function Book({ sidebarOpen, setSidebarOpen }) {
  const chapters = [
    {
      title: "The History of the Handpan",
    },
    {
      title: "The Steelpan of Trinidad and Tobago",
      subchapters: [
        "An Overview of the Steelpan",
        "From Trinidad and Tobago to the World",
      ],
    },
    {
      title: "The Birth of the Hang",
      subchapters: [
        "Reto Weber and the Hang",
        "The Hang Family Tree",
        "First Generation (2001-2005)",
        "Second Generation (2006-2007)",
        "Integral Hang (2008)",
        "Free Integral Hang (2010)",
        "The Hang in a (Nitrided) Nutshell",
      ],
    },
    {
      title: "The Age of the Handpan",
      subchapters: [
        "The Spread of the Hang-type Instrument",
        "Beyond the Letter: The Big Five",
        "Innovation and Evolution: Shaping the Future",
        "Handpan Festivals and Gatherings",
        "Law, Legacy, and the Limits of Ownership",
        "Personal Thoughts of the Author",
        "Closing Thoughts on the Legal Battles",
      ],
    },
    {
      title: "The Physics of the Handpan",
      subchapters: [
        "Ding, Shoulder, Gu and Notes: Parts of the Handpan",
        "Types of Steel Used",
        "The Progression of Materials Over Time",
        "Helmholtz Resonators: Your Gu and You",
        "Handpan Building 101",
        "Creating the Canvas: Sinking Shells",
        "Hand-Sinking",
        "Air Hammer",
        "Spinning or Rolling",
        "Hydroforming",
        "Deep Drawing",
        "Shaping, Heating, Tuning: From Raw Shells to Finished Instrument",
        "Extra Notes About Extra Notes",
        "Lions and Tigers and Bears, Oh My: Monstrous Handpans",
        "The Dangers of Handpan Building",
      ],
    },
    {
      title: "The Theory of the Handpan",
      subchapters: [
        "How Handpan “Scales” Work",
        "Basic Playing Techniques",
        "Layout Shootout: Minor Scale Comparisons",
        "Extending Compositions With Extended Layouts",
      ],
    },
    {
      title: "Handpan Scale Glossary",
    },
    {
      title: "Minor Scales",
      subchapters: [
        "Kurd",
        "Celtic Minor or Amara",
        "Pygmy and Low Pygmy",
        "Integral",
        "La Sirena",
        "Akebono or Hokkaido",
        "Voyager",
        "Magic Voyage",
        "Ursa Minor",
        "Mystic",
        "Equinox",
      ],
    },
    {
      title: "Major Scales",
      subchapters: [
        "Ashakiran",
        "Sabye",
        "Golden Gate",
        "Paradiso",
        "Oxalis",
        "Aegean",
        "Nordlys",
        "Ysha Savita",
        "Raga Desh",
      ],
    },
    {
      title: "Harmonic Minor Scales",
      subchapters: ["Hijaz", "Romanian Hijaz", "Saladin", "Klezmara", "Onoleo"],
    },
    {
      title: "Practical Notes for the Aspiring Buyer",
      subchapters: [
        "Buying a Handpan",
        "Pantam vs Handpan",
        "Handpan Care",
        "Lessons",
      ],
    },
    { title: "Closing Words" },
  ];

  return (
    <div className="content">
      <div className="content-wrapper">
        {/* SIDEBAR */}
        <Sidebar open={sidebarOpen}>
          {/* SITE NAVIGATION */}
          <div className="mobile-nav-only">
            <h2 className="index-title">Navigation</h2>
            <div className="index-list">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/interviews">Interviews</Link>
            </div>
          </div>

          {/* BOOK CHAPTERS */}
          <h2 className="index-title">Chapters</h2>
          <div className="index-list">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="sidebar-chapter-container">
                <a
                  className="chapter"
                  href={`#${slugify(chapter.title)}`}
                  onClick={() => setSidebarOpen(false)}>
                  {chapter.title}
                </a>
                {chapter.subchapters && (
                  <ul>
                    {chapter.subchapters.map((sub, sidx) => (
                      <li key={sidx}>
                        <a
                          className="subchapter"
                          href={`#${slugify(sub)}`}
                          onClick={() => setSidebarOpen(false)}>
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Sidebar>

        {/* BOOK CONTENT */}
        <div className="content-body">
          {/* //! the-history-of-the-handpan */}
          <section>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}>
              <h1 id="the-history-of-the-handpan">
                The History of the Handpan
              </h1>
              <a
                href="https://drive.google.com/file/d/1hcb2bYTSjPrCEcVadwTaRH4dHhqpV2Sa/view?usp=sharing"
                download>
                Download book as EPUB
              </a>
              <a
                href="https://drive.google.com/file/d/16lN5xBhSuKc8r-HiCUb2gHnjmFzElFXw/view?usp=sharing"
                download>
                Download book as PDF
              </a>
            </div>
            <p>
              In this first section of the book, I'll cover the unconventional
              origins of the steelpan, a story that spans continents, colonial
              resistance, acoustic innovation, and artistic experimentation and
              expression of the collective sentiment of resilience an oppressed
              people. Next, PANArt and the Hang's inception and global spread
              through the early 2000's. Then, we'll see how the handpan evolved
              out of the supply and demand for the early Hang and grew into what
              it is today. The story of the Hang and handpan overall is
              especially interesting as no other instruments have been
              unhindered by any particular religion, nation, or tradition. It's
              one of the few instruments whose global dissemination was so
              immediate, widespread, and organically culture-transcending. We'll
              learn about some of the historical firsts with the handpan, as
              well as what global events began popping up around the instrument.
              The final part we'll cover is the ongoing legal battle between
              PANArt and Handpan Community United, which has left the community
              uncertain about the future of the legality and existence of
              handpans as we know them today.
            </p>
            <p>
              I'm also going to continue to use (and hopefully globally
              establish) a name for us all that just makes sense: handpanist.
              Like a pianist or guitarist, this word should be used for all
              performers playing this instrument. “Handpan player” or saying
              “players” is wordy and dorky, making me cringe more and more every
              time I hear it. Why not use the same grammatic structure that has
              existed for centuries with almost every other instrument that
              phonetically allows for its use? You'll see me using this term
              through the book, or using the word “performer” to differentiate
              between those who build (and also sometimes play when they get a
              free moment!) handpans vs. those who only play them. It's my hope
              that the term “handpanist” becomes the commonplace name we all
              use, especially when it can easily translate into other languages
              (handpanista, hanpaniste, etc.).
            </p>
            <p>
              Many people assume upon first encounter that the handpan must be
              ancient based on its sound, shape and unfamiliarity. The truth is
              while the handpan may look like an artifact from the past, its
              story is pure 21st century, more diverse than most people realize
              and only just begun! This section of the book traces that arc,
              from the roots of melodic steel instruments to the invention of
              one of the newest instruments on Earth that has inspired an
              entirely new family of instruments and a global movement around
              them. It's only been 25 years (as I write this) since the Hang was
              publicly released, so it's a brief but quite dense history, with
              too many details to include for the scope of this book, though I
              will do my best to highlight important moments and milestones.
              Turn the page and let's begin the journey of tuned steel together!
            </p>
          </section>

          {/* //! the-steelpan-of-trinidad-and-tobago */}
          <section>
            <h1 id="the-steelpan-of-trinidad-and-tobago">
              The Steelpan of Trinidad and Tobago
            </h1>
            <p>
              The steelpan was born out of a centuries-long resistance to French
              imperialism and the transatlantic slave trade, both of which
              repressed and made illegal the ancestral African culture,
              religion, music, and dance traditions of the people who would
              become Trinidadians. In the 1780s, French colonists brought their
              street festival culture to Trinidad and Tobago. After the
              emancipation of enslaved Africans in 1834, there was a resurgence
              of African musical and dance customs, which fused with colonial
              festival practices to form a new celebration known as
              <em>Canboulay</em>, a harvest festival marked by drumming and
              song. Canboulay became a vital outlet for the continuation of
              African cultural expression and laid the foundation for what would
              become calypso music, itself rooted in West African kaiso
              traditions.
            </p>
            <p>
              Canboulay played a central role in the evolution of Trinidadian
              music and directly influenced the innovations that gave birth to
              the steelpan. In 1937, makeshift orchestras began emerging, made
              up of frying pans, trash can lids and oil drums. These street
              ensembles became popular in Canboulay celebrations and
              competitions, eventually evolving into full-fledged steelpan bands
              (also known as steel bands), and thus a new musical instrument and
              tradition was born.
            </p>
          </section>

          {/* //! an-overview-of-the-steelpan */}
          <section>
            <h2 id="an-overview-of-the-steelpan">
              An Overview of the Steelpan
            </h2>
            <p>
              The steelpan was invented in Trinidad and Tobago in the 1930s and
              first showcased at the Carnival of 1940. It has a long history in
              Trinidad and Tobago and has been a significant part of the island
              nation's cultural life, created as a means of preserving and
              honoring their musical traditions, and has since grown to be a
              significant aspect of the nation's cultural identity. When other
              percussive instruments were banned by the colonial government, the
              people took to playing frying pans, trash cans, and oil barrels,
              which directly led to the steelpan's creation when someone
              realized a dent in a barrel had a tone!
            </p>
            <p>
              Steelpans, which belong to the <em>idiophone</em> family and are
              not actually drums (<em>see: membranophones</em>), are constructed
              from a 55-gallon steel oil drum that has been hand-hammered into a
              melodic form with up to 30 tone fields. This is where the
              colloquial term “steel drums” comes from, as people falsely apply
              the name from the source object and also associate sticks with
              drums, though it's incorrect in the case of idiophones to call
              them drums. The short distance between adjacent tone fields as
              well as the tuning techniques give the steelpan an even more
              distinct timbre. Typically, notes are placed in a circle of fifths
              or opposite one another to avoid dissonance from interference. The
              steelpan is a versatile ensemble instrument renowned for its
              bright, resonant sound. A pair of straight sticks with rubber tips
              are used to play them and the type and size of the rubber tip vary
              depending on the type of pan. Some musicians use four at once,
              holding two in each hand like marimba and vibraphone players (also
              idiophones!). This playing style developed out of the early 20th
              century Carnival percussion ensembles known as "Tamboo Bamboo" in
              Trinidad and Tobago.
            </p>
            <p>
              Winston "Spree" Simon is recognized for inventing the first melody
              pan, which was the first steelpan to play a complete melodic line
              with eight different notes. Adding rubber to the ends of playing
              sticks, Ellie Mannette improved the instrument's tone quality and
              softened the attack. He also invented the concave playing surface
              shape that is currently standard, enabling the arrangement of more
              notes on a single drum. The "spider web pan," a layout of fourths
              and fifths created by Anthony “Muffman” Williams, capitalized on
              these advancements and produced cleaner, more resonant tones. His
              interval-based design is still the most popular tenor pan setup
              today. Additionally, Williams contributed to the standardization
              of the use of 55-gallon oil barrels as the foundational material
              for pans, a practice that still shapes the instrument's design
              today (and where many handpan makers would begin their journeys as
              well!).
            </p>
            <p>
              By creating the double tenor pan and becoming the first to use
              umbrellas to shield the instruments from the sun during outdoor
              concerts, Bertie Marshall advanced the development of the
              steelpan. Other significant advances by Bertie Marshall and Alan
              Gervais include the tuning of harmonic overtones into each note
              and using larger tone fields for lower notes (exactly like
              handpans today). Each pan has a different size and range: Some
              with 30 soprano-range notes and almost the entire "skirt" (the
              body of the oil drum) may be removed, while others may use the
              entire bottom of the drum for three bass notes per pan, in which
              case one person may play six different pans to have an entire
              octave of chromatic notes. These are called Six-Bass sets, and
              variations with 9, 12 and 14 notes evolved later.
            </p>
            <p>
              The sweet spot range of the oil drum size and the length of the
              skirt often matches. Pans are also usually painted or chrome
              plated and, as a finish, other procedures like nickel plating,
              powder coating, or nitriding (a gas-treatment that diffuses
              nitrogen into the surface of a metal to create a case-hardened
              surface) can also be used. Nitriding processes were common in
              early handpans and created the sound people are most accustomed to
              hearing and seeing until the last 8 years when stainless steel
              handpans have more or less become the de facto standard. Those are
              heated in kilns and ovens giving them a wonderful spectrum of
              golden colors and have become more popular and preferred by most
              players for their softer, longer resonance and dynamic range.
            </p>
            <p>
              Overall, the handpan's roots in the steelpan are an integral part
              of its history. The steelpan has played a significant role in the
              development choices of the handpan in terms of what metal to use,
              how to treat it for tone and tuning stability, and how to shape
              and tune it. Some of the greatest makers in the early days were
              steelpan makers before they built handpans (Kyle Cox of Pantheon
              Steel and Reo Sonobe of Sonobe Handpans, to name two). It
              continues to be an important influence on the instrument's
              evolution and popularity in terms of the texture and timbre that
              handpan makers seek to evoke with their instruments, whether it be
              a metallic or ceramic sound desired.
            </p>
          </section>

          {/* //! from-trinidad-and-tobago-to-the-world */}
          <section>
            <h2 id="from-trinidad-and-tobago-to-the-world">
              From Trinidad & Tobago to the World
            </h2>
            <p>
              The global expansion began in 1950 with Arthur Aldwyn
              <em>“Boscoe”</em> Holder. His BBC show, <em>Bal Creole</em>, aired
              on June 30th, 1950 and was the first introduction of the steelpan
              to audiences outside of Trinidad and Tobago. The
              <em>Trinidad All-Steelpan Percussion Orchestra</em> (
              <em>TASPO</em>), was formed by 12 of the best steelpan players
              from various Trinidadian steel bands to participate in the
              Festival of Britain in 1951. The members were all legendary
              steelpan musicians: Winston <em>“Spree”</em> Simon (
              <em>Fascinators/Tokyo</em>), Ellie Mannette (<em>Invaders</em>),
              Anthony <em>“Tony”</em> Williams (<em>North Stars</em>), Sterling
              Betancourt (<em>Crossfire</em>), Philmore <em>“Boots”</em>
              Davidson (<em>City Syncopators</em>), Orman
              <em>“Patsy”</em> Haynes (<em>Casablanca</em>), Carlton
              <em>“Sonny”</em> Roach (<em>Sun Valley</em>), Belgrave Bonaparte (
              <em>Southern Symphony</em>), Andrew <em>“Pan”</em> de la Bastide (
              <em>Chicago</em>), Dudley Smith (<em>Rising Sun</em>), Theophilus
              <em>“Black James”</em>
              Stephens (<em>Free French</em>). They were the first steel band to
              travel outside Trinidad and Tobago to showcase this new instrument
              to the world.
            </p>

            <p>
              From that point on, there was a surge of steelpan makers appearing
              all over Europe and the Americas. Companies have been supplying
              steel bands with instruments in the ever-growing global community
              ever since. This is where companies like PANArt, creator of the
              Hang, and Pantheon Steel, creator of the Halo and the first North
              American handpans, or Sonobe in Tokyo, got their start as musical
              instrument makers. Speaking of Hang and handpan, let's discover
              how they began next!
            </p>
          </section>

          {/* // ! the-birth-of-the-hang */}
          <section>
            <h1 id="the-birth-of-the-hang">The Birth of the Hang</h1>

            {/* // ! reto-weber-and-the-hang */}
            <h2 id="reto-weber-and-the-hang">Reto Weber and the Hang</h2>
            <p>
              May 12, 1993: <em>PANArt Steelpan-Manufaktur AG</em> was
              officially registered in the commercial register. Felix Rohner,
              Michael Frey, Bernhard Wissler, Werner Egger, and trustee Beat
              Eichenberger were the founders, collectively known as "
              <em>Berner Oelgesellschaft</em>," the first steel band in
              Switzerland to use homemade steelpans.
            </p>
            <p>
              The founders formed a company to support the emerging Swiss steel
              band scene. Over the following years, the group of shareholders
              grew to twenty-four individuals, all passionate about creating and
              advancing high-quality steelpans supported by expert tuning
              services. They developed and patented a steel alloy called "
              <em>Pang</em>," which would be used in their pans and future
              instruments.
            </p>
            <p>
              In November of 1999, world percussionist Reto Weber approached
              Felix Rohner and Sabina Schärer with a creative idea. He showed
              them his <em>ghatam</em>, a large, pot-shaped percussion
              instrument from southern India, and asked whether a durable, metal
              version could be made, capable of producing multiple notes.
              Inspired by this, in January of 2000 Schärer and Rohner combined
              two Pang shells originally intended for their “<em>Ping</em>”
              steelpans. One shell was in its raw form, while the other had
              already been partially tuned. This hulking prototype became the
              foundation for the Hang sculpture and actually looked more like
              the later “<em>Hang Balu</em>”, both designed to be played by
              hand. This prototype was called the “<em>Baby Hang</em>.” The next
              iteration in January was called the “<em>Ghatpang</em>,” with the
              final design of the first Hang being presented in October of 2000
              at the ICSTS in Trinidad and Tobago. It marked the culmination of
              years of research and experimentation by PANArt's makers. The
              instrument was and continues to be entirely rejected by the
              Trinidadians, something I will touch on.
            </p>
            <p>
              PANArt's website, www.panart.ch went live in August 2000, and a
              "Hang International Group" on Yahoo Groups soon followed.
              Additional Hang prototypes were constructed in early 2001, and the
              technical and acoustic challenges were actively studied. In
              February, the makers consulted with a company specializing in
              acoustic tuning for automobiles. These experts in Helmholtz
              resonance design helped refine the “<em>gu</em>”, the resonance
              port hole in the bottom shell, both visually and acoustically,
              enhancing the Hang's projection and tonal quality.
            </p>
            <p>
              In March 2001, the first Hang sculpture was presented and sold
              publicly at the Frankfurt Music Fair (March 7-11) for €300. PANArt
              relocated to the Hanghaus on the banks of the Aare River in May
              2001. By 2002, they had shipped their thousandth Hang, an
              impressive feat in such a short time. For comparison, producing a
              single handpan today takes one to two months, and many makers
              craft only 200 instruments over the course of several years. There
              are obviously exceptions here, but with the wait lists as they are
              today, I doubt there are many single artisans or small 2-3 man
              groups producing more than that.
            </p>
            <p>
              The year 2003 was pivotal for PANArt: the company changed its name
              from <em>PANArt Steelpan-Manufaktur</em> to
              <em>PANArt Hangbau AG</em>, expanded its distribution network,
              launched the "Hanghausmusik" concert series (featuring invited
              Hang musicians), and was granted a patent for their “Process for
              the Production of Sheet Metal Sound Instruments.” In 2004, Felix,
              his son David, and Sabina participated in the first “Hang Out” in
              Glastonbury, England. In 2005, around 200 Hang owners gathered at
              the PANArt space for the First International Hang Players'
              Meeting, where they shared experiences and explored their
              instruments together.
            </p>
            <p>
              Though production of the Hang (any generation) ceased in 2013,
              PANArt has continued developing new variations based on the same
              principles, experimenting with different shapes, sizes, and sound
              concepts. These new instruments, many patented and individually
              named, are still crafted upon request.
            </p>
          </section>

          {/* // ! the-hang-family-tree */}
          <section>
            <h2 id="the-hang-family-tree">The Hang Family Tree</h2>
            <p>
              The Hang fits into the idiophone class of instruments, as I
              mentioned earlier, and is heavily based on the Trinidadian
              steelpan. The term “handpan” was coined by Kyle Cox of Pantheon
              Steel, both due to copyright concerns surrounding the name “Hang”
              and because PANArt explicitly wanted to avoid the term becoming a
              generic label for similar instruments. It made sense, especially
              coming from another steelpan maker creating a steel instrument
              designed to be played with the hands.
            </p>
            <p>
              PANArt's instruments are crafted using a mix of traditional and
              cutting-edge metalworking techniques. Making a Hang is a
              demanding, labor-intensive process that requires a high level of
              craftsmanship. It involves shaping the body with hydraulic
              presses, followed by months of hand-hammering the tone fields
              using specialized hammers and mallets. The instrument is then
              heat-treated, likely in kilns or specialized ovens, to age the
              metal and compact its molecular structure, ensuring the steel
              remains stable during the tuning process. (Unfortunately, I'm not
              sure of the exact technical details of PANArt's thermal
              treatments.)
            </p>
            <p>
              This process is repeated several times, and the precise “recipe”
              for making a Hang differs significantly from the methods used by
              most handpan makers, whose own techniques vary widely from one
              another. Now that we've covered the basics of how the Hang is
              made, let's explore the different iterations of the instrument
              over the years.
            </p>
          </section>

          {/* // ! first-generation-2001-2005 */}
          <section>
            <h2 id="first-generation-2001-2005">
              First Generation (2001-2005)
            </h2>
            <p>
              The first generation Hang was produced from 2001 to 2005 and was
              available in a wide variety of scales, up to 45 different sound
              models. Some of the early ethnomusicological modes that inspired
              PANArt included Aeolian, Ake Bono, Hijaz, Melog, Pygmy, and Zhi
              Diao. Each instrument featured seven tone fields arranged in a
              circle around a central note on the dome called the “ding.” Early
              ding tunings included F3, E3, and by 2005, Eb3 and D3, which
              allowed for deeper, more resonant tonal ranges. This development
              led to what PANArt referred to as the “Low Hang.” At that point,
              two layout options were available, seven or eight tone fields in
              the circle, versus the original seven.
            </p>
            <p>
              Each first-generation Hang was individually numbered, with the
              name of the sound model inscribed, and bore either Felix Rohner's
              or Sabina Schärer's signature on the inside of the ding. This
              tradition, of signing the inside and writing the scale notes and
              name on the bottom shell near the rim, has continued among many
              modern makers to this day.
            </p>
          </section>

          {/* // ! second-generation-2006-2007 */}
          <section>
            <h2 id="second-generation-2006-2007">
              Second Generation (2006-2007)
            </h2>
            <p>
              In spring 2006, PANArt introduced a new generation of Hang,
              commonly referred to as the second generation. These instruments
              featured a few distinctive construction changes: a brass ring was
              added around the equator where the two shells meet, and the
              surface was coated with a thin layer of annealed brass over the
              nitrided steel. More importantly, PANArt moved away from the wide
              variety of sound models and began focusing on a single structure
              centered around a ding tuned to D3.
            </p>
            <p>
              The surrounding tone circle always included two A notes (A3 and
              A4) and an additional D (D4), with the other notes varying
              depending on the specific instrument. Most models still featured
              seven tone fields in the circle. Starting in 2007, PANArt also
              began angling the tone fields at about 45° from an imaginary line
              drawn from the ding to the edge of the instrument. Earlier
              Hanghang (plural of Hang) had tone fields oriented radially toward
              the ding, more like traditional steelpans.
            </p>
            <p>
              Another shift during this era was in the placement of signatures
              and serial numbers. Instead of signing the inside of the ding,
              PANArt started inscribing signatures near the outer edge of the gu
              side, with serial numbers marked inside the gu hole. Unlike the
              first generation, these later models were not given specific names
              for each tuning.
            </p>
          </section>

          {/* // ! integral-hang-2008 */}
          <section>
            <h2 id="integral-hang-2008">Integral Hang (2008)</h2>
            <p>
              In spring 2008, PANArt unveiled a new model called the Integral
              Hang. The first units were actually dated November 2007, and from
              that point on, serial numbers were reset and began with an “H”
              prefix (e.g., H1, H2, etc.).
            </p>
            <p>
              Several significant changes distinguished the Integral Hang from
              earlier models. Only one tuning was offered, consisting of seven
              tone fields arranged in a fixed scale: D3 (ding), A3, Bb3, C4, D4,
              E4, F4, and A4. The gu on the bottom shell was subtly reshaped to
              an oval to better support tuning of the three neck partials, D5,
              F5, and F#5.
            </p>
            <p>
              The ding underwent a major redesign as well. A circular
              indentation was added to the dome, which was textured with a brass
              coating, annealed, and then lacquered. PANArt also reshaped the
              shoulder area between the ding and the tone fields to create a
              more gradual transition than in the second generation. All
              identifying information, including the PANArt logo, serial number,
              date of finalization, and the makers' signatures, was moved to the
              gu side near the equator.
            </p>
          </section>

          {/* // ! free-integral-hang-2010 */}
          <section>
            <h2 id="free-integral-hang-2010">Free Integral Hang (2010)</h2>
            <p>
              In April 2010, PANArt introduced the Free Integral Hang, a
              refinement of the Integral model with some key construction
              changes. Most notably, the brass ring previously encircling the
              seam between the ding and gu was removed. The dome of the ding
              also lost its brass coating and adopted a more complex “triple
              dome” design.
            </p>
            <p>
              But the most radical shift was in the tuning philosophy itself.
              The Free Integral Hang was tuned entirely by ear, without the use
              of any electronic or mechanical tuning tools. While the ding
              generally remained centered around D3, the precise pitch varied
              between instruments. The tone circle still followed the layout of
              the Integral Hang, but PANArt placed more importance on the
              overall resonance and character of the instrument than on exact
              harmonic ratios between partials.
            </p>
            <p>
              This approach mirrors the tradition of Trinidadian steelpan
              makers, who often detuned partials slightly to enhance the sound.
              Acoustic researcher Anthony Achong showed that this kind of
              intentional detuning, combined with the amplitude and frequency
              modulation of overtones, is crucial to creating the steelpan's
              signature tone. PANArt applied this same principle to the Free
              Integral Hang, using it as a creative parameter in the
              instrument's design rather than adhering to mathematically perfect
              tuning.
            </p>
          </section>

          {/* // ! the-hang-in-a-nitrided-nutshell */}
          <section>
            <h2 id="the-hang-in-a-nitrided-nutshell">
              The Hang in a (Nitrided) Nutshell
            </h2>
            <p>
              PANArt's first Hangs generated a lot of interest and demand, and
              the company quickly built a reputation for crafting high-caliber
              instruments. I remember discovering the instrument online in 2012
              and seeing a multi-year waitlist, with a price of around 1500€, if
              I recall correctly. A few people have recently approached me while
              I was busking and told me about their first encounters with the
              Hang, experiences quite similar to mine. Some mentioned seeing
              them resold on eBay for double or even triple the original price,
              driven by the high demand for the early Hangs. While writing this
              section, I came across some blogs that confirmed these firsthand
              accounts I'd heard in the street, noting that PANArt ceased
              production in 2005, which caused some Hangs to be sold for as much
              as $10,000. PANArt had specifically banned resales in the
              contracts with each buyer, but this was obviously ignored.
            </p>
            <p>
              It was never PANArt's intention to make a ton of money, but the
              sensation they created, and the resulting demand, led to that
              level of price inflation. In the absence of Hangs on the market,
              this also spurred the invention of the handpan. Since then, the
              handpan's price has largely stayed within the same 1,500 - 2,000€
              range, despite there being over 300 makers now around the world.
              You'd think that level of supply would outpace demand, but it
              seems to me that this price point has kept things balanced with
              what makers can realistically produce while still maintaining
              quality and affording them liveable income.
            </p>
            <p>
              PANArt Hangs have been played by thousands of musicians all over
              the world and have featured in a wide range of musical
              performances, concerts, festivals, and recordings. The instrument
              sparked the birth of an entire genre of music and a growing global
              phenomenon. Thanks to the initiatory groundwork laid by Felix
              Rohner and Sabina Schärer, the Hang's popularity has contributed
              invaluable knowledge and inspiration to the handpan and its
              development as a deeply revered and adored instrument worldwide.
            </p>
          </section>

          {/* //! the-spread-of-the-hang-type-instrument */}
          <section>
            <h1 id="the-coming-of-the-age-of-the-handpan">
              The Age of the Handpan
            </h1>
            <h2 id="the-spread-of-the-hang-type-instrument">
              The Spread of the Hang-type Instrument
            </h2>
            <p>
              These instruments have gained popularity among musicians worldwide
              since their invention and now hold a place in both traditional and
              modern music. They've become a popular across many genres due to
              their distinct sound, which complements nearly any instrumental
              combination. Since then, a variety of musical styles, including
              Indian Carnatic, African drumming, samba, psychedelic ambient,
              techno, downtempo/chillout, meditative, and sound-healing music,
              have integrated the handpan into their soundscapes.
            </p>
            <p>
              New makers continue to emerge each year across the globe as
              knowledge of the tools and techniques needed to craft handpans
              spread via social media and festivals. Many of these makers also
              reach out to the community by offering fabrication masterclasses
              for those eager to learn the craft.
            </p>
            <p>
              When it comes to notable handpanists in the community, there are
              hundreds of incredibly talented musicians of all ages, as well as
              many incredibly skilled makers worth mentioning. Many of them will
              be interviewed in the second part of this book, so for now, I'll
              hold off on naming names for the sake of brevity and fairness to
              everyone I've invited to contribute their stories.
            </p>
            <p>
              As the handpan's popularity continues to rise, it's likely to
              reach even more parts of the world. Its unique tone and
              adaptability make it appealing to many, and ongoing improvements
              in building techniques, efficiency and materials are helping
              makers refine their craft. I'm sure that as more people travel
              with their instruments, perform in public and share all those
              experiences online, the instrument will become even more
              accessible and known to the mainstream.
            </p>
          </section>

          {/* //! beyond-the-letter-the-big-five */}
          <section>
            <h2 id="beyond-the-letter-the-big-five">
              Beyond the Letter: The Big Five
            </h2>
            <p>
              From what I've gathered, through digging into now-defunct Hang
              blogs and conversations with veteran players and builders, by at
              least 2007, PANArt had a peculiar process for acquiring a Hang.
              You had to write them a letter. Not an email. A physical letter.
              Then, based on what you wrote and their assessment of your
              musicianship (however they judged that), you might be personally
              selected to travel all the way to Bern, Switzerland. Once there,
              you'd get to choose from a small batch of 10 to 30 instruments.
            </p>
            <p>
              While plenty of people did succeed in getting one, many more were
              denied, sometimes with no clear reason, and often because they
              were percussionists. Yes, percussionists being rejected by makers
              of hand percussion instruments... sorry, “sound sculptures.” Makes
              perfect sense, right? At the time, the price was still relatively
              low, about 900€. Remember, that was 900€ in 2007, and these
              instruments weren't anywhere near the pristine level of quality we
              see in stainless steel handpans now. Still, hindsight makes that
              price look like a steal and it honestly was for what they were!
            </p>
            <p>
              Naturally, exclusivity led to the inevitable: a global wave of
              builders thinking, “Ehh, I could make that!” …and many did! The
              first person to begin trying to build something like the Hang,
              based on the information I've gathered and am personally aware of
              in my interviews, was none other than Marco Della Ratta in 2006,
              with his Disco Armonico. I still think the first person to create
              and publicly sell a “handpan” (at this point, the terms handpan
              and pantam had not yet existed) was Bill Brown in Germany, who
              released the Caisa in 2007. Next came BellArt in 2009 with the
              “Bells,” made by Luis Eguiguren in Spain. Not long after, Kyle Cox
              of Pantheon Steel introduced the “Halo” in March 2009. The term
              “handpan” was coined by Kyle Cox at Pantheon Steel for the obvious
              reasons of it being a steelpan you played with your hands. Another
              joined the community, Victor Levinson of SPB (short for Handpans
              made in St. Petersburg), Russia. Interestingly, Victor was also
              the first to publicly use the term “pantam”, a blend of steelpan
              and ghatam used by a handpan distributor at the time, which
              referenced the two instruments, steelpan and ghatam, that inspired
              the Hang. Also entering the scene in 2009 were Ezahn Bueraheng and
              his friend Flavio Brant Alvim, co-founders of EchoSoundSculptures
              with their “AsaChans” in Switzerland. For the sake of historical
              accuracy and fairness, I'm officially coining them “The Big Five”
              and will refer to them as such going forward.
            </p>
            <p>
              Now, at this point, the history conversation can go in two
              directions. One path follows the explosive growth of waitlists as
              Hang fans all over the world discovered these new instruments and
              scrambled to save up and get on the lists of The Big Five. The
              other path? That one is much darker and entails PANArt's
              decade-plus legal offensive to shut down what they see as
              unauthorized copies of their art, a campaign that has had mixed
              results until 2022 to 2024.
            </p>
            <p>
              Let's sectione into each of those directions in the later chapter
              “Law, Legacy and the Limits of Ownership” and my perspective on
              things after finishing all of my interviews.
            </p>
            <p>
              The cult-following of the Hang and the hysteria in the online
              community surrounding obtaining one led a small band of people
              from different corners of the world to begin creating the first
              iterations of what we now call the handpan/pantam, and I think a
              more historically accurate name is “Hang-type instrument.” We also
              have to consider that the internet wasn't at all what it is today.
              Social media was only just beginning to take root and explode in
              2007. With the advent of many expanding hubs of media-sharing, the
              instruments suddenly had platforms on which to be showcased and
              shared.
            </p>
            <p>
              By 2007, the handpan entered the anthropological spotlight as a
              rare example of a modern acoustic instrument with no single
              cultural origin, shaped instead by a global and decentralized wave
              of makers and performers. One could argue that the cultural origin
              is actually Trinidad and Tobago, which I personally find accurate
              and more respectful. Paying due respect to the Trinidadians who
              toiled endlessly at creating the steelpan, without which none of
              this would exist, is something that I think few people discuss or
              consider when talking about handpans. I wish for that to change
              and for our community to focus on historical education of both
              their efforts, as well as those of PANArt.
            </p>
            <p>
              Besides directly contacting the makers on whatever websites they
              managed at the time, eBay was the main marketplace where a lucky
              few would find secondhand Hangs being sold. Oftentimes due to the
              extremely high demand, Hangs were resold for more than the
              purchase price, which was explicitly forbidden in the PANArt sales
              contract. There is a legendary story of a Hang listed and sold for
              $10,000 at one point. I've never seen anything like their contract
              before or since the Hang, and I find their petition for the
              ethical resale of the Hang and their anti-profiteering desire for
              it in marketplaces to very honorable. Super idea, PANArt! Too bad
              that didn't work out. Hangs are still resold today for thousands
              more than people paid for them and depending on the generation,
              seen as rare collector's items.
            </p>
          </section>

          {/* //! innovation-and-evolution-shaping-the-future */}
          <section>
            <h2 id="innovation-and-evolution-shaping-the-future">
              Innovation and Evolution: Shaping the Future
            </h2>
            <p>
              Once handpans appeared on the scene, more people picked up the
              (air)hammer and joined the party. Known as “makers,” they
              initially emerged across Europe and then some in the Americas, but
              soon spread worldwide. Today, you'll find dedicated makers
              throughout the Asian continent and Oceania, too. The biggest hubs
              for handpans in 2025 seem to be central and south/western Europe
              (Germany, Holland, France, Italy, Spain), China and Iran. Today,
              I'd estimate there are upwards of 300 makers around the world, due
              to so many having little or no social media presence and
              reputation. Additionally, there is no central registry of people
              actively building and selling instruments. Perhaps this is
              something that I should create after this guidebook is complete so
              that history is more easily maintained by the community going
              forward.
            </p>
            <p>
              As handpan makers experimented with new scales, layouts of
              previous scales and even increasing the number of tone fields on a
              single shell, many exciting new innovations emerged. People began
              adding notes to the bottom shells, like Jan Borren. I believe he
              was also the first person to add extra notes beyond the typical 8
              or 9 around the ding, placing smaller, higher-octave notes between
              the ding and this outer ring. Rafa D'Arco of Tacta handpans
              reported that in the Americas, Jon Antzoulis of Aura Handpan was
              the first to make a mutant handpan. These were dubbed “mutant”
              handpans, the first being Jon's “cyclops” with one extra note
              which kind of looked like the handpan now had an “eye” or was
              “mutated” from the typical form. He went on to joke that the
              “mutant” name was a total X-Men reference, I absolutely love that!
              It wasn't long before makers were adding more mutant notes with
              higher tonality layouts that accommodated them. (i.e. D Kurd 12,
              F3 Low Pygmy 20 or E Romanian Hijaz 18).
            </p>
            <p>
              A major shift in handpan building began in 2018 when Yishama's
              Yhonatan Ale-Yahav introduced the first F2 Low Pygmy at Griasdi,
              first played publicly by Kabeção. This is the famed “Astronaut”
              layout of F2 Low Pygmy, one note different than what the rest of
              makers typically make in 53cm. You can listen to it in the famous
              “Great Wall of China” video on YouTube. This marked the rise of
              “low ding” handpans, with large central domes and deeper ranges
              that soon became a new benchmark. Yhonatan also appears to be the
              first to build an E2 Hijaz that same year, while the first D2, C#2
              and C2 builds I found were all built first by Harmonic Sculpture
              as far as public announcements show, who by the same public
              records on YT, still holds the world record for lowest ding on a
              53cm, fully extended C2 Minor 16 layout. Arcana Handpan now holds
              the record for the largest handpans, reaching C2 with their76cm
              “Goliath” models, most of which remain in their private
              collection.
            </p>
            <p>
              In the opposite direction from low scales, brands like Satya,
              Mudra, and Ziran in Brazil and Uruguay are adding more mutant
              notes to the top shells—ranging from the size of a plum down to a
              half-dollar or maybe a bit bigger than a 2€ coin. They still
              maintain fully-extended bottom shells with six or more tone
              fields. While all three brands have achieved 25+ notes, cleanly
              and stably tuned, only Satya has gone beyond and created 28, 30,
              32 and even a 40-note handpan (using this mutant size on both top
              and bottom shells around the ding and gu). Satya is also the only
              brand I am aware of that has created A2 and F2 instruments with
              eight to nine notes around the ding and two mutant notes on their
              Jabbar and Shangri-La models, for example. If nothing else, they
              will be remembered for absolutely crazy layouts such as these,
              pushing beyond the limits of what people thought possible.
            </p>
            <p>
              Most popular handpan scale names like “Kurd,” “Pygmy,” or “Sabye”
              don't have any real basis in music theory: They're arbitrary or
              poetic names for specific note sequences. Sometimes the same scale
              goes by several names, depending on the maker or the key. While
              these names can help non-musicians connect to the instrument,
              they're often arbitrary and can cause confusion for newcomers. You
              can find more details on scales and layouts in the theory section
              of this book.
            </p>
            <p>
              Handpans were originally made from raw, nitrided, or carbon steel,
              with stainless steel long considered unusable. That changed in the
              2010s when makers like Satya, Leaf, Metalsounds, and Tacta began
              producing successful stainless models, sparking a crazed shift in
              the scene and obsession with the sustain stainless brought. Since
              then, many makers have used the same three or four grades of
              stainless and some have given them different names to appear to be
              unique, just like with scales such as Kurd with its 5+ different
              names. We'll get into the details of physics in the next section
              of this book.
            </p>
          </section>

          {/*//! handpan-festivals-and-gatherings */}
          <section>
            <h2 id="handpan-festivals-and-gatherings">
              Handpan Festivals and Gatherings
            </h2>
            <p>
              From the earliest days of the handpan, people around the world
              began organizing gatherings and festivals centered on the
              instrument. While the first events date back to the late 2000s,
              the majority have emerged more recently, especially between 2018
              and 2024, when new festivals were appearing every year. This
              global surge in events has done wonders for the evolution of the
              instrument and the community around it, acting as creative
              incubators for new styles, sounds, and collaborations.
            </p>
            <p>
              Many players got their first major exposure at these gatherings,
              and quite a few makers introduced their first prototype
              instruments during early editions of these festivals, launching
              their reputations in the process. These events have played a
              central role in shaping the identity of the handpan world. They're
              not just meetups: they're where techniques are shared,
              collaborations are born, and lifelong friendships are forged. The
              community spirit that defines the handpan scene today owes a lot
              to these grassroots gatherings.
            </p>
            <p>
              Since 2007, more than 30 handpan-related events have emerged
              across the globe. Below, I've put together a chronological list of
              the most well-known Hang and handpan festivals (at least those I
              could track down or personally know of), along with their
              locations and founding years. Look up the ones nearest you online.
              You might just find your next musical home!
            </p>
            <ul>
              <li>Hangout UK (England, 2007)</li>
              <li>Handpangea (USA, 2011-2013)</li>
              <li>Hang Uut Festival (Netherlands, 2011)</li>
              <li>Panacea (France, 2013)</li>
              <li>Handpan World Music Festival (France, 2014)</li>
              <li>Hangout USA (USA, 2014)</li>
              <li>Pantasia (USA, 2015)</li>
              <li>Singading (Spain, 2015)</li>
              <li>Griasdi (Austria, 2016)</li>
              <li>Pan Oz (Australia, 2016)</li>
              <li>Steel Mountain (USA, 2017)</li>
              <li>Hona (Greece, 2018)</li>
              <li>Pan Marco (USA, 2018)</li>
              <li>“HUG” Hungarian Handpan Festival (Hungary, 2019)</li>
              <li>Tokyo Handpan Festival, Tokyo Sound Lab (Japan, 2019)</li>
              <li>Pan India (India, 2019)</li>
              <li>
                Super Bloom Life (Women only Handpan Gathering, USA, 2020)
              </li>
              <li>Hangout (France, 2021)</li>
              <li>Bulgaria Handpan Festival (Bulgaria, 2021)</li>
              <li>Pantribe (Belgium, 2022)</li>
              <li>Swiss Handpan Festival (Switzerland. 2022)</li>
              <li>Wild Naya Academy (Austria, 2022)</li>
              <li>Dutch Handpan Festival (Netherlands, 2022)</li>
              <li>Canarias Handpan Festival (Spain, 2022)</li>
              <li>Handpan Festival Brazil (Brazil, 2023)</li>
              <li>Bali Handpan Festival (Indonesia, 2023)</li>
              <li>Ontario Handpan Festival (Canada, 2023)</li>
              <li>Pangonia (Germany, 2023)</li>
              <li>PanSiam Pantam/Handpan Gathering (Thailand, 2023)</li>
              <li>Pai•Pan Handpan Gathering (Thailand, 2024)</li>
              <li>Pantu Handpan Festival (Poland, 2024)</li>
              <li>Vivaan Handpan Gathering (India, 2024)</li>
              <li>Heartland Hangout (USA, 2024)</li>
              <li>Pandance (Germany, 2024)</li>
              <li>Sound-Sculpture Handpan Gathering (Germany, 2025)</li>
              <li>PANdala (Germany, 2025)</li>
              <li>Castle Handpan Festival (France, 2025)</li>
              <li>Costa Blanca Handpan Festival (Spain, 2025)</li>
              <li>PanParadise (Germany, 2025)</li>
            </ul>
          </section>

          {/* //! law-legacy-and-the-limits-of-ownership */}
          <section>
            <h2 id="law-legacy-and-the-limits-of-ownership">
              Law, Legacy, and the Limits of Ownership
            </h2>
            <p>
              As I explained earlier in the chapter “The Birth of the Handpan,”
              five new companies emerged between 2007 and 2009. Their arrival
              sparked conflict in online Hang forums, with heated debates over
              whether these new instruments looked too similar to the Hang. Some
              distributors and later makers even used the term Hang to market
              these early handpans, claiming it was a generic name for a whole
              family of instruments, essentially trying to justify what many saw
              as theft. In response to claims that he was doing this, Luis
              Eguiguren of BellArt publicly clarified that his instruments were
              called “BElls®” and that “BEllArt®” was also a separate,
              registered trademark, and that he hated people calling them
              Hangs®. He'd never used those words in his website or
              communications, and claimed immunity from responsibility for
              anyone doing that. Ironically, PANArt, who had previously seemed
              open to others experimenting with their idea and processes,
              quickly reversed their stance once these alleged copies began
              appearing and they had actual competition in the global market.
            </p>
            <p>
              On June 27, 2012, PANArt took BEllArt owner Luis Eguiguren to
              court in Spain, attempting to legally prevent him from producing
              BElls on the basis that they were copies of the Hang. During the
              trial, the judge called upon Ravid Goldschmidt as a subject matter
              expert. He's the owner of Handpan Barcelona, one of the first
              touring Hang players and famed Barcelona buskers, a close friend
              of both Luis and PANArt and someone who actually learned to tune
              with them for a time. According to accounts of the events I heard
              in my interviews, Ravid was asked directly whether he could tell
              the difference between a Hang and a BEll, not whether anyone in
              general could, but him specifically. He answered that he could do
              so easily. That was enough for the judge. They ruled that BElls
              were not the same as Hangs, and the case was dismissed. It would
              be some years before PANArt resumed legal action against the
              handpan community.
            </p>
            <p>
              In January 2014, PANArt made a surprising move: they offered
              limited licenses to use their methods, without providing any
              training. By March of 2014, they extended a “material analysis”
              service, allowing makers to send in their steel to be tested by
              PANArt. However, this seemed like little more than a thinly veiled
              attempt to monitor for patent infringement. Some saw it not as an
              act of collaboration or support, but as a strategic trap designed
              to gather evidence for potential lawsuits.
            </p>
            <p>
              In 2016, a legal settlement was reached in Switzerland between
              PANArt Hangbau AG and EchoSoundSculptures GmbH after the latter
              was accused of copying PANArt's instrument designs too closely.
              PANArt claimed that EchoSoundSculpture's handpans bore too strong
              a resemblance to their original Hang and Gubal sound sculptures.
              As part of the agreement, EchoSoundSculptures was required to
              significantly alter the shape and features of its instruments to
              avoid confusion, including changing the form of the tone field
              domes and repositioning the resonance hole. They also had to
              publicly acknowledge PANArt's influence on their designs. This
              legal resolution also led other makers, such as Soma Sound
              Sculptures, to proactively change their instrument designs to
              avoid similar issues.
            </p>
            <p>
              While copyright protection is strong in Switzerland, the situation
              outside the country is more challenging. PANArt faced failures
              enforcing their intellectual property in places like the U.S.
              against Pantheon Steel and Harmonicart in Colombia, leading them
              to shift focus to innovation and cautious legal strategy rather
              than repeated litigation. The ESS case highlights the importance
              of clear design distinctions and legal awareness for small
              creators, especially in niche industries like handpan making.
              PANArt emphasized being content that coexistence seemed possible
              after that was finished.
            </p>
            <p>
              In 2019, PANArt Hangbau AG filed a legal case against the company
              Hand steelpan and owner Jacopo Marrocchelli in Italy for copying
              the protected design of the Hang® Gubal® and Balu®, and for
              infringing on the trademark by using the name "GU-PAN" for both of
              its instruments, which closely resembled "Gubal." The Milan court
              issued an injunction prohibiting Marrocchelli from manufacturing,
              marketing, or selling the infringing instruments, and ordered him
              to pay €2,300 in legal costs and €2,000 per future infringement.
              Jacopo didn't appeal and the ruling was finalized. PANArt stated
              they may take similar action against future violations of this
              kind.
            </p>
            <p>
              In 2020, PANArt filed a lawsuit against the German retailer “World
              of Handpans” and won in the first instance. The court ruled that
              the Hang® is a work of creative art protected by copyright,
              meaning that handpans with a similar shape could be considered
              infringements. PANArt argued that the Hang® is not a musical
              instrument, but a piece of fine art, making it eligible for
              copyright protection, unlike functional musical instruments, which
              typically aren't. This ruling currently affects Germany, but
              PANArt has stated they intend to pursue legal action in other
              countries and had at that time already sent a cease and desist
              letter to Ayasa Instruments in the Netherlands.
            </p>
            <p>
              It is important and interesting to note that PANArt cleansed their
              website and any publications that they'd made up until that point
              which referred to their instruments as instruments, and instead
              started down this path of calling them “sound sculptures” to gain
              the legal benefit of being able to argue plagiarism of their art,
              since functional objects and mechanisms are not protected under EU
              copyright law. This works on paper legally in terms of semantics,
              while also showing their character, and what lengths they were
              willing to go to so they could gatekeep their creation from the
              world, quite clearly. PANArt cannot possibly provide a planet-wide
              demand for Hangs on their own. The world didn't wait, they simply
              picked up their hammers and got to work continuing this
              exploration, with or without PANArt.
            </p>
            <p>
              If PANArt's claim goes unchallenged, it could have serious
              implications: handpan makers might be legally barred from
              producing instruments in the familiar shape, and live
              performances, workshops, or videos featuring such instruments
              could be restricted. This lawsuit is part of a broader pattern of
              legal actions taken by PANArt against other makers. While groups
              like HCU (Handpan Community United) hope for a more collaborative
              relationship with PANArt, they now feel compelled to support
              affected makers and challenge these copyright claims in order to
              preserve the freedom to build, sell, and innovate within the
              handpan community.
            </p>
            <p>
              It was in September of 2020 that PANArt's lawyers sent a letter to
              Ayasa Instruments in the Netherlands. PANArt claimed that Ayasa
              was making and selling handpans and raw shells that copied the
              unique design of the Hang, including its specific shape and layout
              of notes around the central dome (ding) of the instrument, and
              resonance port hole (Gu). They also argued that Ayasa's public
              statements and sales encouraged others to make similar copies.
              PANArt claimed this violated their copyright, even though PANArt
              themselves had expressed interest initially in people innovating
              with their idea in years prior. It seems to me that seeing others
              outshining them and overshadowing may have contributed to them
              changing their position.
            </p>
            <p>
              PANArt argued that the Hang wasn't just a musical instrument, it
              was a work of art, carefully designed to reflect the creators'
              artistic vision. They said multiple courts in Germany had already
              agreed that the Hang's shape was protected under copyright law,
              and that this legal protection applied across the European Union,
              including the Netherlands.
            </p>
            <p>
              In the letter, PANArt said they were open to settling things
              outside of court, but only if Ayasa accepted that the Hang was
              protected by copyright. If Ayasa refused and kept selling the same
              designs, PANArt made it clear they were prepared to take legal
              action in Dutch court. They invited Ayasa to stop selling the
              instruments immediately and to meet in Zurich to talk about a
              possible agreement.
            </p>
            <p>
              What followed after some back and forth was the Ayasa headquarters
              being raided by police, thousands of euros worth of handpans,
              shells and tools being confiscated (and still are to this day as
              far as I'm aware). The HCU mobilized across the internet and
              handpan gatherings and by word of mouth immediately, trying to
              raise funds to fight the now 5-year-long legal battle (that is
              ongoing as of June 2025) to protect the rights of makers to build
              handpans in the EU and handpanists to perform with and sell music
              made using handpans. The court cases between Berlin and Amsterdam
              have been ongoing for years and for anyone interested in reading
              about them, they are detailed on HCU's website, hcu.global.
            </p>
            <p>
              For sake of space and brevity, I will not include all of them
              here, but will share that the situation as of August 2025 is that
              the courts are finding that PANArt does hold a copyright related
              to the Hang and now must determine if there is any infringement on
              said copyright. There is good news though! The German court
              system, which the case has been temporarily returned to and
              ordered to make a full decision on all aspects of the case first
              before returning it to Switzerland, have recently determined the
              Birkenstocks brand sandals are not copyright protected, as their
              elements are functional rather than artistic, so the same is
              possible for handpans.
            </p>
          </section>

          {/* //! personal-thoughts-of-the-author */}
          <section>
            <h2 id="personal-thoughts-of-the-author">
              Personal Thoughts of the Author
            </h2>
            <p>
              Before you begin, it's important to note that my personal views
              are exclusively mine, and anyone that I have interviewed during
              this project does not necessarily share these opinions. Please do
              not assume that what I am sharing here is the collective view of
              all handpanists. While many may agree with some or all of what I
              say, I do not claim to speak for everyone.
            </p>
            <h3 id="the-origin-hypocrisy">1. The Origin Hypocrisy</h3>
            <p>
              What I find entertaining about this whole story is that PANArt
              started as a steelpan company that culturally appropriated and
              blatantly copied the idea of Trinidadian steelpans. They made
              heaps more money than the Trinidadians selling steelpans for many
              years, without facing any consequences from the Trinidadian people
              or government, and without ever paying any kind of royalties. This
              was not just business, it was another chapter in the long history
              of European cultural appropriation, where traditions from
              oppressed people are stolen, rebranded, and sold for profit after
              those same people were punished for their own forms of
              self-expression. It is the same story we see with Black music and
              culture in the United States, which has been copied and profited
              from worldwide. To make things even worse, PANArt once went to
              Trinidad and Tobago to show off their so-called superior steelpan
              material and the Hang, only to be laughed out of the country. That
              part admittedly always makes me smile with the biggest,
              mischievous, Cheshire Cat grin. Knowing Felix, he probably waltzed
              in telling them that Pang was the future and they were "doing it
              wrong," which probably led to a swifter kick in the ass out of
              their community.
            </p>
            <h3 id="the-legal-farce">2. The Legal Farce</h3>
            <p>
              The irony of it all is that when others took PANArt's ideas,
              improved them in a matter of a few years (and continue to do so
              more every year since then), and became more popular by not acting
              like gatekeepers, PANArt reacted with a long, bitter and
              still-ongoing tantrum. They tried to claim copyright over
              functional parts of the Hang, calling them fine art and artistic
              choices, as if hammering dimples into steel could ever be compared
              to painting a masterpiece or sculpting pure marble.
            </p>
            <p>
              The truth is simple. Makers can create impex dings and even small
              dimples inside dimples. PANArt themselves admitted this was
              different enough not to count as infringement, as shown in their
              legal action against EchoSoundSculptures. But dimples are
              necessary for sound and stability of the tone fields. PANArt's
              argument is basically, “Change your instruments in extremely small
              and pointless ways and maybe we will allow them.” As if that would
              ever make people abandon handpans for Hangs, which PANArt has not
              even produced in more than ten years!
            </p>
            <p>
              Still, they continue to fight what looks like a losing battle,
              trying to copyright the very shape of the instrument. Even worse,
              they tried to delete old evidence from the internet where they
              openly called the Hang an instrument and encouraged others to
              innovate on the idea, but apparently only as long as said
              innovation didn't become more popular or make more money than
              them! Unfortunately for PANArt, The Wayback Machine has kept
              archives of their original words for over twenty years. In the
              courts, their shifting stories and poor character do not matter.
              Judges only care about facts, comparisons, and technical
              definitions of similarity. On that level, PANArt's lawsuits look
              less like the protection of art and more like petty obstruction
              over something they have abandoned themselves back in December of
              2013, long before the legal battles with Ayasa began when they
              initiated a seizure of counterfeits and parts stored at Ayasa
              Instruments B.V. on 28 April of 2021, following warnings for
              copyright infringement.
            </p>

            <h3 id="the-missed-opportunity">3. The Missed Opportunity</h3>
            <p>
              There is also a personal side to this story. When Felix Rohner was
              a child, his father's idea was stolen by a business partner and
              his father was cut out of the deal completely, which led him to
              take his own life. This seems to be a deep and unresolved trauma,
              and now Felix is likely seeing himself as reliving his father's
              experience of injustice through the creation of handpans. It
              explains his obsession with control, but it does not excuse the
              harm PANArt has and continues to try to cause to a community that
              otherwise celebrated them and would continue to do so.
            </p>
            <p>
              Many have said that if PANArt embraced the new direction of
              building extended range instruments with stainless steel, they
              might have kept their place as one of the most respected and
              sought after builders, simply for being the originators. They
              likely would have been welcomed all the festivals, asked to give
              talks and workshops, and been remembered with admiration.
            </p>
            <p>
              The hardest part for many to accept has been the fact that Felix
              even demanded the destruction of instruments made by other
              builders, including respected makers like Ayasa. When I share this
              with people who are often seeing a handpan for the first time (via
              my performances in my city and surrounding regional area), the
              response is always the same: First comes disbelief, then offense,
              and finally disappointment. People often exclaim, “But how can you
              copyright the shape of an instrument!?” One person even compared
              it to trying to copyright the shape of a pair of pants - it's
              outright ridiculous. To most, the idea is entirely absurd and an
              affront to music and the creative spirit of humanity.
            </p>
            <p>
              From that “human point of view,” it feels completely backward.
              PANArt brought something extraordinarily life-changing into the
              world, and it was inevitable that others would build on it. That
              is exactly how human innovation historically works: Someone lights
              a spark and makes the first torch and campfire, then others carry
              said flames forward to build coal-fired pizza ovens, fire dancing
              props and musically-synchronized, flame-belching art cars at
              Burning Man: CUZ IT'S COOL! That future just arrived much, much
              faster than PANArt could have imagined. It must have been
              upsettingly surreal to watch themselves be lapped in a race that
              they weren't aware they were even a part of and that had only just
              begun moments earlier.
            </p>
          </section>

          {/* //! closing-thoughts-on-the-legal-battle */}
          <section>
            <h2 id="closing-thoughts-on-the-legal-battles">
              Closing Thoughts on the Legal Battles
            </h2>
            <p>
              In the end, PANArt's strict and closed approach, forcing people to
              write letters just to be considered to buy a Hang, not to mention
              the logistic and financial complications of having to travel all
              the way to Bern, Switzerland to pick one of a handful of
              instruments at random, created an atmosphere of elitism and
              exclusion. People had to accept whatever Hang they were given,
              with no custom requests, and many were rejected without reason.
              This left people feeling that PANArt built walls around an art
              form that should have symbolized openness and connection.
            </p>
            <p>
              Understanding Felix's familial background does help empathize with
              his need to protect his creations. But all attempts at
              reconciliation, even from friends and pioneers of the Hang who
              later built and/or played handpans, have been rejected. Felix has
              made it clear that “PANArt does not make handpans,” and that is
              usually where any related conversation abruptly ends.
            </p>
            <p>
              It is true that handpan makers could have accepted some
              compromises, like impex dings or mini dimples inside the dimples,
              and perhaps avoided many years of conflict and astronomical legal
              fees largely crowdfunded by the community itself…but here we are.
              The community has grown stronger and more united through and
              despite this struggle. Every new player eventually hears the story
              and naturally sides with the handpan, the joy and love of music,
              and with the idea that no one should be allowed to own the shape
              of an instrument.
            </p>
          </section>

          {/* //! the-physics-of-the-handpan */}
          <section>
            <h1 id="the-physics-of-the-handpan">The Physics of the Handpan</h1>
            <p>
              This section will cover how handpans are made from beginning to
              end, the differences between raw, carbon, nitrided and stainless
              steels and how the processes and steel types affect the end
              result. I will discuss various parts of the instrument and their
              functions, safety in handpan construction, and a little bit of
              history sprinkled in about the community's relationship with and
              reaction to these developments. I'd also like to touch briefly
              upon the future of the instrument in terms of the creation
              process.
            </p>
          </section>

          {/* //! ding-shoulder-gu-and-notes-parts-of-the-handpan */}
          <section className="physics-lists">
            <h2 id="ding-shoulder-gu-and-notes-parts-of-the-handpan">
              Ding, Shoulder, Gu and Notes: Parts of the Handpan
            </h2>
            <p>
              I always read this title to the tune of "
              <em>Head, Shoulders, Knees and Toes.</em>" I hope it's stuck in
              your head now, ha ha ha... There are 7 main parts of the Hang-type
              instrument. I'll briefly describe each part's location and
              function within the overall instrument below:
            </p>
            <ul>
              <li>
                Body - the steel shell itself upon which all of the notes are
                hammered, and where the gu porthole is cut out of the bottom
                shell. The body is not tuned, but is hammered to help reinforce
                it as a “global anchor” for the tone fields, to hold them in
                place and allow them to resonate properly.
              </li>
              <br></br>
              <li>
                Ding - the central dome/tonefield on top of the instrument. This
                is usually the root of the key that the handpan is tuned to, but
                at times the 5th scale degree. There is an apex (convex) dimple,
                versus impex (concave, like other tone fields). With dings at a
                D3 and lower, the harmonics playable at each axis of the dome
                are bendable (a neat trick!).
              </li>
              <br></br>
              <li>
                Gu - the porthole on the bottom of the instrument. This serves
                as the aperture/neck of the Helmholtz resonator's
                chamber/cavity. PANArt has created instruments in which its rim
                is flattened and tuned to be played as an extra note, and holds
                a copyright on this concept. It can be played exactly as the Udu
                is, creating a low, bassy formant sound which can be quite fun
                to experiment with.
              </li>
              <br></br>
              <li>
                Interstitial - the space between each tone field, which is
                technically a part of the body overall. This is hammered to
                dissipate vibration from neighboring notes and isolate the
                frequencies, resulting in cleaner notes without interference.
              </li>
              <br></br>
              <li>
                Rim - the edges of the two shells are glued together with
                industrial sealant glue and then ground down to a smooth finish,
                both for comfort and safety as much as visual aesthetics. PANArt
                was known for creating brass rings to protect and decorate the
                rim in certain generations of Hang, and also laid claim to this
                aesthetic touch. This led to makers like Meridian Handpan
                placing a thin brass ring between the two shells before grinding
                and polishing, giving a beautiful line of color between the
                shells - a subtle but classy touch. The industrial glue cures
                over time, and while the instrument is finally playable after 2
                weeks, it will continue to open up and deepen its resonant
                qualities over the course of the first 1-3 years - an exciting
                surprise for early makers and something for players to enjoy as
                they grow with their new instruments over time.
              </li>
              <br></br>
              <li>
                Shoulder - this is the edge/border of the ding, and is often
                tuned as well. A “rim shot” can be played on the shoulder akin
                to snare drums and depending on the tuning, can sound quite
                lovely. The borders of all other tone fields/notes are just
                called borders.
              </li>
              <br></br>
              <li>
                Tone Fields - these are the flat, ovular parts of the instrument
                that circle the ding (and the gu if your pan is extended with
                bottom shell notes). They are tuned by hammer to specific
                pitches according to their size, which determines the
                lower/upper limits the metal can be tuned to. Finding the sweet
                spot for each tone field size allows for maximizing the use of
                the space on a shell, as well as accounting for interstitial
                interference. Some handpans have space for even smaller tone
                fields called “mutant notes” between the outer ring and the
                central ding. The most famous examples are extended D Kurds, E/F
                Romanian Hijaz and F Pygmy scales, video examples of which now
                litter social media and video-sharing sites.
              </li>
            </ul>
          </section>

          {/* //! types-of-steel-used */}
          <section className="physics-lists">
            <h2 id="types-of-steel-used">Types of Steel Used</h2>
            <p>
              First, let's lay out what each of the words above means and then
              we can discuss when and where they were/are used.
            </p>
            <ul>
              <li>
                Carbon Steel - Higher carbon content; increased strength and
                hardness; good for use in low-stress applications; more
                susceptible to corrosion, especially in humid/salty environments
                (coastal regions); cheaper and stronger than Raw Steel. Usually
                has a dark color ranging from dark gray to black, with some
                having blue or purple tints. This is the precursor to nitrided
                steel.
              </li>
              <br></br>
              <li>
                Nitrided Steel - Heat-treated and nitrogen-diffused carbon steel
                (achieved through a gas-nitriding process most commonly with
                ammonia, which is rich in nitrogen); Much higher
                corrosion-resistance than the previous two types, but not
                impervious to it. Usually has a dark color ranging from dark
                gray to black.
              </li>
              <br></br>
              <li>
                (Raw) Steel - increased strength due to alloying properties of
                carbon and iron; resistant, but not impervious to corrosion;
                malleable to allow for easier shaping; lower strength and higher
                cost compared to carbon steel. Usually has a dark gray to black
                color.
              </li>
              <br></br>
              <li>
                Stainless Steel - alloy containing chromium, making it highly
                resistant to corrosion; 'Ferritic' or rarely 'martensitic'
                steels are used for handpans (400s grade); Colors range from
                gold and copper to various shades of chocolate brown and even
                purple after heat treating, sometimes removed with a solvent
                afterwards, returning it to its typical silver color.
              </li>
            </ul>
          </section>

          {/* //! the-progression-of-materials-over-time */}
          <section>
            <h2 id="the-progression-of-materials-over-time">
              The Progression of Materials Over Time
            </h2>
            <p>
              To begin to discuss these types of steel and their usage in the
              building of handpans, we must begin with PANArt and their nitrided
              steel they named “Pang.” PANArt experimented with the length of
              time the steel was exposed to the gas nitriding process to
              discover optimum qualities that would result in stability for
              shaping, tuning, and to attain the tonal qualities they were
              looking for. Nitrided steel has a strong, warm tone and decent
              resonance as well. Unfortunately, these initial experiments were
              not as stable as makers have achieved today, and often were
              detuned easily as the instruments were not very resonant and
              buskers in the street would play them much harder to get the sound
              to reach their audience, easily detuning their Hang.
            </p>
            <p>
              This isn't impossible to achieve with carbon steel, though the
              tone tends to be brighter and resonance may be longer depending on
              the techniques used to build the instrument. My personal
              experience so far has been that carbon steel handpans are much
              more resonant than I expected. They look similar to nitrided pans,
              but their notes ring out much clearer and brighter than any
              nitrided pan I've played, apart from a few special cases from SPB
              and other top shelf early makers.
            </p>
            <p>
              Stainless steel was beginning to be used sometime between 2016 and
              2017, and brought handpan making into an entirely different realm.
              A handful of makers around the world began exploring and
              experimenting with it - Leaf, Satya and Tacta handpans being some
              makers I know of to pioneer its use early on, though I'm sure
              there were one or two others doing so in private, as Rafael D'Arco
              confirmed was definitely the case but couldn't remember who it
              might've been. Stainless steel is much more elastic than other
              types of steel which has a deep impact on the sonic properties of
              the steel and also how it is shaped. Being that stainless steel
              always tries to revert to its original/previous form, makers must
              combat this by putting extra hammer blows and energy into the
              steel to get it to stretch and then resist back into the form they
              desire. The upside to this extra work is that once in form/tune,
              this stubborn elasticity helps keep the steel there quite well.
              It's not infallible, but it's quite stable.
            </p>
            <p>
              Stainless steel also has a much higher resonance or sustain than
              the previous types of steel used, double or triple what carbon and
              nitrided steel can achieve. While carbon steel might ring out for
              3-5 seconds, stainless easily reaches 6-9 seconds. Some makers,
              such as Tacta, want to achieve less sustain with stainless steel:
              wanting its timbral and percussive properties without the long
              sustain. This is better for recording purposes in not having to
              deal with “audio mud” and phasing issues. Personally, I adore an
              “overly resonant” pan, as it creates an ambient wash that is epic
              for meditative and relaxation purposes.
            </p>
            <p>
              Nowadays, very few makers are working with nitrided or carbon
              steel, and most new makers go straight into stainless production,
              buying shells from Ayasa, Shellopan or Mirashells for example.
              Many makers are forming their own shells now as well, such as my
              friend Max at Ziba Drums. These brands offer various grades of
              stainless steel that all have unique sonic properties for varying
              tastes amongst handpanists. I'm positive there are others who sell
              pre-sunk shells, but I am unaware of who they are and follow far
              too many social media accounts to remember which ones I've seen
              promoting their products in this way. Mirashells and Ayasa are the
              only ones I know of with an entire online presence dedicated to
              their products. I've personally owned 3 instruments built on
              Mirashells now and can attest to their high quality, stability and
              beautiful timbre.
            </p>
            <p>
              Apart from the move away from nitrided to stainless, many makers
              have also delved into the world of textures and “skins” by using
              different polishing techniques, buffer attachments and something
              still tightly gatekept that results in what Omana Handpan created
              and coined the name for “Dragon skin,” which indeed has a leathery
              look to it akin to that of reptile skin. The secret to creating it
              is tightly guarded, and the price is extremely high for customers
              for what it is. I suggest going directly to Omana for this, as
              others' quotes were a couple hundred euros more than theirs for
              something that isn't quite the same.
            </p>
            <p>
              The information and number of people creating handpan-making tools
              available today dwarfs what we had even ten years ago. Many makers
              in the first 2 generations had to create their own tools from
              scratch and solve every problem on their own. There was very
              little information even within the famous and now defunct
              handpan.org forums where early makers showed off their work and
              asked for advice, and players shared what they were doing.
            </p>
            <p>
              Some makers are now sharing shaping and tuning specifications and
              techniques information through their social media accounts and
              websites, a welcome breath of fresh air to grow the community of
              makers. Hopefully information, access to tools and the number of
              people who create tools for makers continue to grow so that the
              craft doesn't die out and we will have access to local makers for
              yearly servicing all around the world. It would certainly be
              difficult and risky to rely on shipping things to China and back
              if the mass production factories end up being the only ones left
              in a decade or two, plus not having an instrument for 1-3 months
              would be devastating to the majority of handpanists, especially
              those with only one instrument.
            </p>
          </section>

          {/* //! helmholtz-resonators-your-gu-and-you */}
          <section>
            <h2 id="helmholtz-resonators-your-gu-and-you">
              Helmholtz Resonators: Your Gu and You
            </h2>
            <p>
              By adjusting the resonance frequency of an enclosed area with a
              small volume of air, Helmholtz resonators are used to enhance
              acoustic performance and minimize noise. This almost exclusively
              had industrial applications until the Hang was invented. They're
              named after the German scientist Hermann von Helmholtz who first
              showcased them in 1859. Helmholtz resonators are made up of a
              chamber or cavity that is connected to the primary sound source by
              a little neck or aperture. The cavity's and the neck's resonant
              frequencies work together to either attenuate or enhance sound
              waves as they enter. The size of the neck, the frequency of the
              sound wave, and the cavity's dimensions all affect how much
              attenuation occurs.
            </p>
            <p>
              The fundamental idea of Helmholtz resonators is wave interference.
              The air inside a Helmholtz resonator vibrates at the same
              frequency as the sound wave when it enters the chamber. The
              resonant frequency of the chamber is determined by the resonator's
              neck, which works like a tuning fork. The amplitude of the sound
              wave inside the chamber is increased when its frequency coincides
              with the chamber's resonant frequency, while other frequencies are
              dampened or nearly entirely muted in some cases.
            </p>
            <p>
              In layman's terms, the handpan's inner cavity is the “chamber” and
              the gu is the “neck/aperture.” The diameter of the handpan shell
              directly affects the size of the Helmholtz resonator and by
              extension the frequencies that will be able to be tuned easily on
              the steel's surface. Certain frequencies, like Bb4, simply do not
              play nicely with the 53cm diameter shells due to the way that its
              wavelength interacts with the size of the inner chamber. Using a
              larger or smaller diameter changes the notes which will or won't
              work, as explained with the wave interference concept above.
              Certain tonalities for certain layouts are impossible to make
              because of these impedance points such as Bb4 on 53cm shells or
              C#5 on some mini pans.
            </p>
            <p>
              Approaching the resonator from another angle, the gu will
              sometimes need to be “extended” to properly adjust the internal
              resonance. This is done by adding a wooden or plastic (now that 3D
              printing is a thing) tube of a specific length into the gu, which
              is often fitted with a thin strip of cork glued to the tube to
              ensure that the fit inside the gu is tightly sealed so that it
              doesn't fall out. This amplifies the bass frequency of dings A2
              and lower and helps to control and focus the resonance from within
              the chamber outward. The sound is wild at that point: holding the
              pan up to one's ear and firmly playing a muted strike on the ding
              releases a short but powerful, sub-bass thump. This is one of my
              favorite things to show people with low ding instruments.
            </p>
            <p>
              To quote the late physicist Dr. Anthony Achong, whom many consider
              the top scholar in the realm of steelpan physics: “...it is true
              to say that the beautiful mathematical structure of pan dynamics
              is matched by the profoundly beautiful sounds of pan music.”
            </p>
          </section>

          {/* //! handpan-building-101 */}
          <section className="physics-lists">
            <h2 id="handpan-building-101">Handpan Building 101</h2>
            <p>
              There are multiple different tools that one needs to build
              handpans, no less than 4 different ways to create the base shells
              upon which makers shape and tune the tone fields/notes, and many
              vastly different results based on the combinations of tools and
              methods one chooses. There are more nuances to every item in this
              list, and I will touch on those in more detail individually after
              this list. Some of the basic tools you'll need:
            </p>
            <ul>
              <li>
                Dimple press - A vertical hydraulic press used in tandem with a
                metal sphere and ovular dies (imagine a taller, oval-shaped
                hockey puck with a hole in the center) to evenly press the
                dimples into the newly formed shells before hammering the tone
                fields around them. You can hand-hammer dimples, but I believe
                this is rare and most people will buy a press ASAP as it
                exponentially increases the speed at which you can churn out
                pans.
              </li>
              <br></br>
              <li>
                Fully-loaded toolbox - Let's face it: You're going to be working
                with all manner of tools and you're often going to have to build
                your own, as well as physical aids like stands, vice clamps,
                etc. You're going to need at least a basic set of tools from
                screwdrivers to files to hammers and wrenches of all sorts - the
                more you have the better-off you will probably be. Think a
                typical red toolbox you could carry in one hand, maybe not
                necessarily those giant wall-sized ones, but this will change
                depending on how involved you are in your tooling processes, I
                suppose. Having things to service/repair the essential tools
                above, or optional ones below, is more or less the goal.
              </li>
              <br></br>
              <li>
                Hammers - In different sizes and shapes, used for shaping and
                tuning. Usually wooden, metal or plastic and the tuning hammers
                almost always seem to be covered in a very specific and
                intentional amount of duct tape unique to each maker, from what
                I've seen on and offline.
              </li>
              <br></br>
              <li>
                Hand torch/Kiln/Brick oven - You'll need something to heat-treat
                the steel shells after finishing the shaping process and before
                beginning the first round of tuning. Each maker has their own
                “recipe” of how hot and how long they heat their shells, and
                whether they repeat heat treatments at any point in the process,
                so I can't honestly say when it happens beyond the first
                obligatory heating. This is done to “age” the metal, compacting
                the molecules together making them stronger and more stable when
                then tuned. Some makers have the heat in digitally controlled
                kilns and ovens change over time. Others use large ovens with
                racks inside to bake many pans at once, versus one in a ceramics
                kiln. I've seen people use the sun outside, but I think that
                this is almost always in tandem with the torches and the sun
                alone cannot heat the metal to the temperatures needed to create
                the desired atomic stability.
              </li>
              <br></br>
              <li>
                Linotune™ - Strobe tuner software (desktop/mobile) used to tune
                the fundamental, fifth and octave of each tone field
                simultaneously. This has become the industry-standard app to
                tune with. I don't believe/know if there is anything nearly as
                robust and accurate as Linotune.
              </li>
              <br></br>
              <li>
                Metal cutting tools - Electric or manual shears are generally
                used to trim the corners off the sheet of steel after the shell
                is sunk in the center of it. Some makers have laser cutting
                tools, but this is rare as they're quite expensive.
              </li>
              <br></br>
              <li>
                Tone field templates - Usually ovular and circular magnets of
                specific sizes with the notes a tonefield of that size can be
                tuned to written on them, made either by trial and error or
                obtained from other makers.
              </li>
              <br></br>
              <li>
                Tuning rings - Metal rings with holes around the edges to clamp
                them together with industrial nuts/bolts, placed on a stand to
                hold them in place while they spin vertically to allow access to
                the top (outside) and bottom (inside) of each shell.
              </li>
            </ul>
            <br></br>
            <p>
              Some optional versions of the tools above, or others that you
              could employ to make handpans a lot faster and with much less
              physical exertion might be:
            </p>
            <ul>
              <li>
                Air hammers - Compressed air hammers, like hand-jackhammers,
                used to hammer out the shell whether you are sinking it or
                “shaping” the body, hammering it to form stability or softness
                and make the shoulders/borders of tone fields. They can be quite
                dangerous if not used properly. Avoid using “vibration gloves”
                as these spread out the vibrations and also make you lose grip
                on the hammer, causing exponentially more arm and hand nerve
                damage than they are assumed to actually be preventing. They
                eject extremely cold air (from the compression) usually
                someplace just above where you'd grip them (be careful!!)
              </li>
              <br></br>
              <li>
                Compressor - A tank, usually about the length and height of the
                passenger seating area of a car (front and back), used to power
                the air hammers.
              </li>
              <br></br>
              <li>
                Deep drawing machine - A kind of hydraulic press used to form
                the sheet metal with a few pieces: A punch is the rigid, shaped
                tool usually made of hardened steel that moves vertically to
                press sheet metal into a die, a hollow mold shaped like the
                final lenticular shell, thereby deforming the metal without
                breaking it by forcing it to flow and conform to the die
                cavity's shape. In layman's terms: It's a big metal ball that
                hydraulically presses into the sheet metal against an equally
                curved bowl-mold to form the lenticular shells used to build
                handpans.
              </li>
              <br></br>
              <li>
                Hydroforming setup - This functions exactly like the deep
                drawing machine, but is literally a pressure washer shooting
                into an industrial-grade bladder that fills and presses into the
                shell, creating the same dome shape as the metal punch/die by
                different means. This is a form of free shaping without a
                mandrel.
              </li>
              <br></br>
              <li>
                Rolling machine - A machine that will mechanically “roll”
                against the steel sheet and sink the shell for you. As far as I
                understand, this is programmed by a controller PC and done
                automatically. This was and still is not widely used, but does
                exist. I believe Pantheon Steel used this tech for a time before
                moving on to deep drawing.
              </li>
              <br></br>
              <li>
                Tuning booth - Having an acoustically treated (just line the
                walls with foam honestly) booth for tuning can result in more
                accurate reading with Linotune and less (but nowhere close to
                zero) annoyance to anyone within a 200ft radius.
              </li>
            </ul>
          </section>

          {/* //! creating-the-canvas-sinking-shells */}
          <section>
            <h2 id="creating-the-canvas-sinking-shells">
              Creating the Canvas: Sinking Shells
            </h2>
            <p>
              Now that you have a very basic understanding of the tools needed,
              let's discuss how the four different types of forming the base
              shells ultimately affect the outcome of the sound and what
              physical possibilities they provide or prevent respectively.
              Choosing to hand-sink your shells can be very physically draining
              and take days, but gives you the most control over the exact depth
              and thickness of the shell at every point. Choosing to use an air
              hammer might speed up the process immensely, but you forfeit the
              accuracy of hand-sinking and may put more energy or depth into the
              shell than intended, but this is still quite accurate if done
              carefully.
            </p>
            <p>
              Hydroforming has been reported to produce inconsistent shell
              thickness based on the parameters you use with your setup. Deep
              drawing gives you a highly-accurate and consistent thickness each
              time. Of course, each of these processes grows many times more
              expensive (in the thousands) than the previous one. Hydroforming
              can cost around $2000-5000 to build (depending on how
              MacGuyver/DIY you get with it) while a deep drawing setup is
              significantly more than everything else and cannot be self-made,
              easily reaching upwards of $20,000.
            </p>
            <p>
              It's important to also describe the difference between thickness
              of the steel shells being used to create the instruments. Makers
              have been using 1mm to 1.2mm thick steel sheets to build handpans
              and those slight differences (even a difference of 0.08 can be
              felt!) make a massive difference in the sound, stability and
              malleability of the materials.
            </p>
            <h2 id="hand-sinking-with-traditional-hammers">Hand-Sinking</h2>
            <p>
              Beginning with the first option of what we refer to as
              “hand-sinking” your shells, you'll likely pull out your wooden
              mallet from your designer Super Mario Bros. toolbox and start
              hammering the shell as evenly as you can, for an ungodly number of
              hours to slowly sink it down into the shape and depth you desire.
              I imagine metal hammers would likely be much less prone to
              chipping and breaking than wooden mallets, and could likely
              deliver more concentrated kinetic energy per strike than wood, but
              I've been told using larger mallets is easier.
            </p>
            <p>
              This is the slowest and most physically strenuous option, and also
              one that every maker I have spoken with has said they believe
              people should try at least once. Having that experience will teach
              you things that you didn't know about the steel that you might not
              have noticed or seen otherwise, which could enhance your ability
              to use other tools in a more precise way that leads to better
              outcomes you didn't know you were skipping or preventing with poor
              or simply different techniques. I think the biggest advantage here
              is having the most accurate and consistent control of depth and
              thickness of the shell all over, something incredibly important
              for stability. The biggest disadvantage is the massive toll it
              takes on your body. Some makers reported it taking hundreds of
              shells to perfect their hand-sinking technique, and often that the
              ding area is thicker than deep drawn or hydroformed shells.
            </p>
            <h2 id="air-hammer">Air Hammer</h2>
            <p>
              Next up is using air hammers. These exponentially decrease your
              production times, physical fatigue (though that's still a huge
              problem) and still give you a very accurate control over depth and
              thickness of the shells. There are some dangers associated with
              the air hammers as discussed previously, but aside from the
              massive con of very easily causing oneself permanent nerve damage
              (I feel sad writing this knowing people often purposely ignore
              this), the pros of being able to produce more shells and have
              consistent results from shell to shell, especially when hammering
              into a mold as is common practice, may be worth it to you. Molds
              are metal bowls essentially the depth and curvature that you want
              the flat sheet to be after you finish hammering the sheet into it
              (a physical limiter of sorts). This is similar to the deep drawing
              machine mold.
            </p>
            <h2 id="spinning-or-rolling">Spinning or Rolling</h2>
            <p>
              In this method, the sheet of steel is placed on a spinning lathe,
              while a “buck” is held in the middle of the sheet. It is slowly
              moved outside, which creates the shell. Rolling is similar in that
              the shells are spun while an object is pressed into it to push out
              and form the curvature of the shell.
            </p>
            <h2 id="hydroforming">Hydroforming</h2>
            <p>
              Another option is hydroforming. This does have the ability to
              create relatively consistent thickness across the entire shell
              while being exponentially faster than hand and air hammers. All it
              takes is a garden hose, pressure washer, some hose attachment
              conversion adapters for high-pressure hoses, needle and manometer
              valves and per Colin's suggestions, and some extra on/off valves
              placed throughout the sequence to control, stop and purge pressure
              at various steps in the process. Essentially, you're automating
              everything as much as possible and removing a large amount of
              human error. You could even have the shell press into a physical
              trigger to turn the machine off when the shell reaches the max
              depth. The setup and forming processes may be a bit complex, but
              the time saved and accuracy gained is worth it. The process is
              obviously much less physically strenuous than hammering since the
              machine is working for you, and is much more cost-effective as
              well.
            </p>
            <p>
              The materials necessary (albeit dated now, and since Europeans had
              improved the original design by making it smaller and portable
              soon after) are easily found on Xenith Handpans' website and the
              presentation video from Hang Out USA 2016 is on the same page if
              you'd like the in-depth video explanation beyond what I've written
              here. The sound is said to be quite unique when compared to
              hammered shells, which makes sense if the membrane is more
              consistent all over, so will be the sound. It should be noted that
              it isn't perfectly consistent in all spots as with deep drawing,
              but is quite close to it.
            </p>
            <h2 id="deep-drawing">Deep Drawing</h2>
            <p>
              Finally we have deep drawing. As Mark Garner of Saraz said,
              “...[deep drawing] offers a bit more inherent, ceramic or 'pantam'
              tone and timbre, relative to a fully hammer-shaped shell or a
              rolled shell.” The only company deep drawing shells for years was
              PANArt, and they never provided materials to handpanists, of
              course. Eventually, Matthieu of Shellopan in France and Ralf of
              Ayasa in the Netherlands began producing deep drawn shells and
              continue to sell them to other tuners since then. Many makers
              today got their start and formed their sound with these shells,
              and still buy them to this day.
            </p>
            <p>
              The deep drawing process of forming shells is the most expensive
              and difficult to setup, but the most consistent and fastest method
              to quickly create hundreds of usable shells if desired (and we do
              desire!). Two industrial rings come together vertically, with a
              large curved press bending the flat, steel sheet into a curved
              mold. Deep drawing has the advantage of allowing additional
              material from the sheet to slip in between the rings while being
              pressed, meaning that the shell isn't thinned out in any sections
              and consistent thickness from dome-to-rim.
            </p>
          </section>

          {/* //! shaping-heating-tuning */}
          <section>
            <h2 id="shaping-heating-tuning-from-raw-shells-to-finished-instrument">
              Shaping, Heating, Tuning: From Raw Shells to Finished Instrument
            </h2>
            <p>
              Once the shells are formed, it's time to move on to pressing
              dimples, shaping the ding and tone fields and then tuning!
            </p>
            <p>
              First comes the layout. Magnetic stencil templates that are
              specific shapes and sizes for each tone field/note are placed
              around the inside of the shell, with some at specific angles
              towards or away from the ding to avoid unwanted activations
              between related octaves and harmonics. These mark where the tone
              fields will be hammered, and have their centers hammered/pressed
              into a dimple as a stability anchor point. A permanent marker is
              used to trace the inside and outside rings of these magnets so
              that the dimple areas are measured visually and can be accurately
              pressed easily. This is the stage where the tuner decides on the
              scale and what notes will be placed from each octave to create it,
              and alterations in the order, or layout, of the notes make the
              different “scales” we know today like Kurd, Amara, Ursa Minor or
              Mystic.
            </p>
            <p>
              Second, the dimples will be pressed with a hydraulic press in most
              cases, but can be done by hand hammer as well. A thicker, hockey
              puck-like block of metal in the same shape as the magnetic
              stencils is placed on the outside of the shell to hammer into for
              the ding, and inside of the shell for each outer ring tone field
              (hammering in the opposite direction for concave/convex or
              apex/impex dimples). These pucks are heavily duct taped onto the
              shell to hold them in place. I suppose with certain mechanical
              presses, the tape is unnecessary as the dimples can be pressed
              with a simple and momentary pull and release of a lever while the
              shell is held down against them carefully. This is something I've
              seen many times in videos.
            </p>
            <p>
              Third, the shell is placed into a large and heavy ring of metal on
              a barrel and bolted down all around the rim. The barrel usually
              has a concave mold inside to hammer the shell into, such as in the
              deep drawing method of forming the shell in the first place. The
              tuner will use hand or air hammers at this stage to shape the
              body, balancing the amount of tension in the body and where the
              tone fields will be. This is also the step where the ding shoulder
              and borders of the tone fields are shaped by hammer. Some tuners
              define the shoulder/borders more sharply than others and this is
              personal choice based on the timbre and visual aesthetic they
              desire. The Hang has almost non-existent note borders and nearly
              no ding shoulder, while handpan borders range anywhere from
              Hang-like to very sharp.
            </p>
            <p>
              Fourth, the first heating session to prepare the steel to be tuned
              begins. In the past, shells were heated with hand torches, a
              fire-shooting tank and hose, which looks like a fire extinguisher
              funnily enough. Other people have and still use ceramics kilns and
              pizza ovens, and some have massive, industrial brick ovens like
              Numen in Barcelona (check out his video, “What it takes to Build a
              Mystical Handpan” online for a visual on all of these steps and
              also his multi-shell oven!). Once they cool down, the arduous
              tuning of the tone fields begins using Linotune™ to ensure the
              fundamental, octave and fifth harmonics are aligned (it's in
              Mario's video, too). After the first and second (sometimes third
              or fourth, in the case of D2 and below dings) tuning sessions, the
              shells are re-heated in this way, but I'm not 100% sure all makers
              follow the same process in this regard and some may have other
              “recipes.”
            </p>
            <p>
              Finally, the shells will be polished, glued together at the rim
              with an industrial glue that bonds the two shells together
              stronger and stronger over time (also opening up the sound over
              the course of 1-3 years), and after 2-4 weeks of curing, the tuner
              will do a final “fine tuning” session or two by hand with a
              smaller hammer (both reaching inside the handpan via the gu and
              from the outer surface). Slap a fresh layer of oil on it
              (gun-cleaning oil you can get pretty much anywhere) and the
              handpan is ready to be packed up and shipped!
            </p>
          </section>

          {/* //! extra-notes-about-extra-notes */}
          <section>
            <h2 id="extra-notes-about-extra-notes">
              Extra Notes About Extra Notes
            </h2>
            <p>
              Two terms to be familiar with are extended handpans which have
              notes on the bottom shell, and mutant handpans which have extra
              5th-6th octave notes between the outer ring and the central ding.
              Many people also use “fully extended” for both, as mutant pans
              almost always have bottom notes. Since tuners began experimenting
              with more tone fields, there has been a lot of research and
              development into the effects of interference and harmonic
              activations between the top and bottom shells and just how many
              mutant notes one can place, where and why.
            </p>
            <p>
              Bass notes on bottom shell, for example, are tuned primarily for
              their fundamentals only. What I've been told is that they are
              there to serve as bass tones for chord progressions, and therefore
              don't need to have as pronounced fifth/octave harmonic activations
              (though that remains a possible stylistic choice).
            </p>
          </section>

          {/* //! lions-and-tigers-and-bears-oh-my */}
          <section>
            <h2 id="lions-and-tigers-and-bears-oh-my-monstrous-handpans">
              Lions and Tigers and Bears, Oh My: Monstrous Handpans
            </h2>
            <p>
              I'd like to preface this section and say that I've done my best to
              search online and take this information from YouTube and
              Instagram, check post dates against each other, and differentiate
              between 53cm or larger shells in terms of these accomplishments
              when the info was available. It's increasingly difficult to
              contact the already severely hermit makers who have this sort of
              info stuck in their heads and not written in the video
              descriptions most times, if there is any description at all. I
              hate having to cover my tuchus like this, but that's the modern
              age! Hopefully I got most of the records listed below, and I
              suppose any I've missed will have to go into a future website
              connected to this book with quarterly updates, as publishing new
              books constantly isn't viable. Let's get into the milestones!
            </p>
            <p>
              In 2022, Arcana Handpans created B1 and A1 handpans in 53cm
              shells, hand-sunk with 1.2mm 18 gauge 430 stainless steel. Fabian
              of SubtleSoundsHandpans also created both a C2 and B1 ding with 7
              tone fields in 53cm stainless steel. As of July 2025, Matteo
              Gusmeroli of Harmonic Sculpture holds the current record with a
              fully extended C2 Minor 16 layout on 53cm. I was unable to locate
              any other video proof on YouTube from other makers making very low
              dings publicly apart from SubtleSoundsHandpans, Harmonic Sculpture
              and Arcana Instruments, though I'm sure it exists and that most
              makers who have conquered F2 have probably (at least privately)
              attempted (and succeeded at) tuning an E2 and D2 stably at least
              once.
            </p>
            <p>
              Arcana have built several “Goliath pans” at76cm, holding the title
              for largest handpans in the world, with multiple D2, C#2 and C2
              layouts like Amara, Aegean, Hijaz and Klezmara. These sport a full
              array of 9 top notes and up to 12 bottom notes. Leaf Sound
              Sculptures has created mini shells that hold a single, very low
              ding, ranging down to the C2, of which I would love to see a full
              octave set someday.
            </p>
            <p>
              In the complete opposite direction, many makers have also made
              mini handpans from 48cm down to tank drum sized pans. The most
              notable examples I found were from EchoSoundSculptures with their
              MiRim, which they were making in their early years, and Taopan's
              mini handpans which are often double-sided, dual-scale pans,
              sometimes without a gu. While not monstrous in size or depth of
              tone, these pans are equally monstrous in their construction
              difficulty in that fitting 53cm layouts in much less space is
              quite a challenge. Jan at Taopan is the only maker I'm aware of
              that is continually pushing these boundaries and making lower,
              more extended, multi-scale, mini handpans.
            </p>
            <p>
              Satya Sound Sculptures' Antonio Arvinds sits in a category all of
              his own as he continues to hold the world record for highest
              number of tone fields stably and accurately tuned on two 53cm
              shells, with even more notes planned on future experiential pans,
              as well as being the first to pioneer low A2 and F2 dings with a
              full eight or nine tonefields around it with{" "}
              <em>mutant notes!</em> I had to come back to edit this page since
              writing it, because he originally only included 2 mutant notes on
              each of those pans, but recently surpassed his own record with the
              F2 Govinda with 3 mutant notes made specially for Leander
              Greitemann. Bravo and a slow golf clap to you, sir. Antonio is the
              reason that much of the South American community of makers and
              players exist today, having injected the scene there with his
              years of learning from Echo Sound Sculptures and other notable
              makers in Europe in the early 2010's.
            </p>
          </section>

          {/* //! dangers-of-handpan-building */}
          <section>
            <h2 id="the-dangers-of-handpan-building">
              The Dangers of Handpan Building
            </h2>
            <p>
              Not unlike most aspects of our lives, even making beautiful
              instruments can have its pain points. Handpan construction is
              arduous as best and permanently scarring and/or physically
              disabling conditions at worst (in the case of nerve damage easily
              caused by the amount of air-hammer usage makers endure daily),
              which Duncan Arnot of Meridian Handpans detailed in our interview:
            </p>
            <p>
              "
              <em>
                Duncan: I know makers who've been hammering for many years, who
                literally struggle to sleep at night without lying on their back
                because their arms are destroyed and their joints hurt a lot.
                It's a very real danger and our industry is so new and young and
                the use of air hammers is so fresh, that we don't know much and
                there are no long term studies about the ramifications of it
                all. But they don't know it necessarily. I think it's a very
                easy thing to look the other way from the dangers of the
                vibration. But there are many makers who spend two or three
                hours a day, if not more, using air hammers. I did all the
                correct calculations to quantify the legal limits of the use of
                an air hammer, and in the UK, which I imagine the regulations
                are similar in most western countries, I exceed the legal limit
                within ten minutes of use of an air hammer.
              </em>
            </p>
            <p>
              <em>
                That ten minute limit is where, if you use it to that amount
                every day, then within ten years you have a 10% likelihood of
                having irreparable nerve damage to your hands and chronic-pain
                within ten years, which can be debilitating. It can mean you
                can't pick things up or sleep because of the pain. If you go up
                to 30 minutes, you reduce that to about five years. There are
                plenty of makers out there who use it for many times longer and
                have done it for more than five or ten years.
              </em>
              "
            </p>
            <p>
              He said there exists a growing group of veteran makers who are
              trying to sound the alarms as well as develop machines that will
              at least hold air hammers stably (I know I've seen a video of this
              on Instagram, but forgot to save it likely due to it being a
              stories share and not a reel. If you know them, please email
              me!!!). You can then merely guide the direction of the machine
              with handles that are largely removed from the vibrations of the
              tool. This still allows the maker to accurately shape the shells
              by moving the larger contraption, which glides effortlessly. There
              are also health-risks associated with the industrial tools and
              chemicals used: fumes and vapors from solvents, the risk of injury
              from grinding the rims of the handpans, muscular damage from poor
              posture or stress on the body both when shaping and tuning, and
              also polishing the pans before and after tuning, with some
              polishing tools weighing over 10kg each. Handpan makers must be
              extremely careful with their physical health, taking breaks and
              being smart about the aforementioned risks if they want to
              maintain a typical standard of health as they age.
            </p>
          </section>

          {/* //! theory-of-the-handpan */}
          <section>
            <h1 id="the-theory-of-the-handpan">The Theory of the Handpan</h1>

            <p>
              When discussing the theory of the handpan, what I specifically
              want to speak about is the way that handpan “scales” are formed or
              laid out, hence the common terminology “layout” that you'll
              encounter more and more the longer you're in the scene. The way
              that handpans are played is as unique as everything else about
              them. For the most part, with a handful of exceptions, the ding is
              the root of the scale that is being laid out around it on the tone
              fields. In many cases, the interval jump from the ding to the
              first tone field is a fifth, sometimes a fourth. Some layouts
              simply continue up the solfeggio (F, G, A…) while others such as F
              Low Pygmy jump from F2 to F3 (but that particular layout and its
              naming conventions have been confused by the community over the
              years that I'll address shortly, thanks to being enlightened by
              Emma Mumi of Elaia).
            </p>

            <p>
              I'll give a short layout (hehe, see what I did there?) for this
              section of the book and what we'll learn in it. First, we need to
              discuss how handpan “scales” work theoretically. Second, we can
              move on to actual playing/hand techniques. Then, apply that info
              to a few minor layouts, comparing them and how we'd play them.
              Next, we can discuss how extended and mutant handpans can open up
              new compositional possibilities and get into the ergonomics of
              layout design choices. After that, it's important to also talk
              about mixing scales by adding “out of key” notes to the bottom
              shell or borrowing them from another pan altogether, as has been
              the main use case in the last decade.
            </p>

            <p>
              Finally, I'll close out the chapter with what is my favorite part
              of handpans after playing them: a glossary of all the scales that
              are generally available today and a poetic description of their
              ambiances in words that anyone, theory egghead or musical novice
              alike, can easily understand and appreciate. It's my hope that
              people will not only enjoy the imagery I create, but that it can
              help people decide on which scales fit their musical voice or mood
              that they wish to experience and/or express themselves with.
            </p>
          </section>

          {/* //! how-handpan-scales-work */}
          <section>
            <h2 id="how-handpan-scales-work">How Handpan “Scales” Work</h2>
            <p>
              Scales, in terms of handpans, are not actually scales in the
              traditional sense you're probably thinking. They rarely include
              the full solfeggio group of notes across one octave, in order
              (do-re mi-fa-so-la-ti/si-do). It is more accurate to call the
              scales “tonal sequences” and “layouts” for this reason. As
              handpans are tuned diatonically, notes are all part of the same
              key, so nothing clashes and you can't play a “wrong note,” but you
              can play dissonant chords (when two notes are a halfstep away from
              one another, the sound is very tense and warbly as the
              frequencies' wavelengths clash inharmoniously). Layouts are
              arranged by placing the tone fields in a “left-right-left-right”
              pattern on each side of the ding, going from the 'back' of the
              shell at your stomach, around the sides of the ding, until they
              end opposite you at the 'front' of the shell. This also tends to
              create two chords on either side of the instrument, typically one
              major and one minor.
            </p>
            <p>
              When makers post a layout demo video online, they'll write a slash
              “ / ” after the ding, and parentheses “( )” around bottom notes,
              while bottom notes lower than the ding come before it in this
              order. Quite often, due to space limitations and note
              interferences, some notes in the solfeggio are skipped, and
              sometimes only in one of the octaves, like a Bb4 removed as we
              will see below. Let's take a non-mutant, extended D Kurd 16 as an
              example:
            </p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              (Bb2 C3) D3/ (F3 G3) A3 Bb3 C4 D4 E4 F4 G4 A4 C5 (D5 E5)
            </p>
            <p>
              There are two bass notes (usually apex “dings”), Bb2 and C3 on the
              bottom right and left respectively, then F4 then G3, before coming
              up to the first tone field at your stomach, A3, with your right
              hand again. Once you reach the 9th note, C5, the next two right-
              and left-hand notes are back on the bottom shell in the front of
              the pan. These days, those 2 notes are usually added on the top
              shell as mutant notes, while 3 is even more common (why not
              more?!). If you look closely, you'll notice there's no E3 or Bb4
              (because Bb4 doesn't work in 53cm as mentioned before), and the
              layout jumps from D3 to A3. If it weren't being extended, you'd
              lose the F3 and G3 from that octave as well (they don't exist in
              standard or mutant Kurds, only bottom note or “extended” pans).
            </p>
            <p>
              Handpans, for reasons regarding physical space, cannot always
              recreate a layout in perfect solfeggio as on a piano or guitar.
              Kurd, in my opinion, shines most when extended beyond 14 notes
              with Bb2 and C3 below as bass notes for chord progressions, and
              higher notes to extend melodies. A much better example of the idea
              of “tonal sequences” versus full scales would be Aegean, which is
              a layout of the Lydian mode of A Major: D-E-F#-G#-A-B-C#:
            </p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              D3/ F#3 A3 C#4 D4 F#4 G#4 A4 C5
            </p>
            <p>
              First, we have the jump from D to F#, skipping E3, G#3, B3, and
              E4, adding G#4, and then skipping B4. So many notes are left out,
              yet this layout of the Lydian mode still embodies the sound and
              feeling of the Lydian mode perfectly: a major-leaning, dreamy and
              spacey layout that gives a slight amount of tension that doesn't
              quite fit one's expectations from the major feeling overall, but
              such is the Lydian mode.
            </p>
            <p>
              I want to write a final note about layouts and the typical
              tendencies of the community and what people promote to new
              players. Kurd is fine if you wish to follow the beginner tutorials
              on YouTube, which are often made for those without musical
              experience at all, but I highly recommend buying an extended
              (12-15 notes) Amara, Integral, Ursa Minor or Voyager in D Minor
              with the A2/Bb2 and C3 bottom dings for chord progressions and
              arpeggios. These are much more expressive and inspiring
              alternatives that you will grow into fully utilizing
              compositionally over time. Also, you won't want to resell or
              upgrade to more notes in 6-12 months when you already have what I
              believe is a sweet spot for beginner to intermediate players in
              terms of composition and range. Having an extended pan like those
              is to have a compositional tool that should last you at least 5+
              years worth of unique writing, if you put in the effort. My first
              teacher, Leo Trincabelli, wrote multiple, full-length albums with
              just 8-note Kurd and Pygmy, for example. The creative
              possibilities are endless if you put in the work!
            </p>
          </section>

          {/* //! basic-playing-techniques */}
          <section>
            <h2 id="basic-playing-techniques">Basic Playing Techniques</h2>
            <p>
              The way that the handpan is played is with a left-right-left-right
              pattern with the hands, always alternating, called “hand-to-hand”
              playing. The next basic technique is called “split hand” playing,
              which uses the thumb on one tone field and one of the other
              fingers on the tone field directly above it for playing chords and
              arpeggios. You begin up the scale with your left hand on the ding
              (or right if you have a 'left-handed' instrument, but with handpan
              this is pretty irrelevant since you must become ambidextrous
              anyway), and then play the rest of the tone fields with
              hand-to-hand, beginning with the lowest note in the circle with
              your right hand. Picturing a creating a ripple in a body of water
              without splashing much or keeping your finger submerged is an
              excellent way to imagine the striking technique. “Touch it less,”
              I always tell people.
            </p>
            <p>
              Playing chords is quite easy due to almost any neighboring pair of
              tone fields making a perfect 3rd, 4th or 5th interval. You can
              also skip a neighboring tone field to the next in the circle and,
              in most cases, also find a diatonic chord. Split hand is necessary
              for triads and sevenths (3 or 4 tone fields at once) as well as
              playing arpeggios more easily. Watch any seasoned handpanist play
              and you'll instantly see how this translates into all kinds of
              rapid-fire runs and fills.
            </p>
            <p>
              Besides this, you can also use virtually every part of your hands
              to play handpan, which is something many of the greats will often
              ask, “Well are you using your ring and pinky fingers? What about
              your knuckles or fingertips?” Their sonic capabilities are quite
              vast. There are a plethora of percussive techniques and a whole
              world of sounds to be drawn out of these gorgeous discs. The type
              of steel used has a huge impact on the sonic palette of your
              handpan, and the shaping and tuning techniques as well. How you
              play with different types of steel with mutes and finger
              techniques borrowed from other instruments such as tabla, doumbek
              and daf will take you on quite a journey with handpans. Many
              techniques people are using today were only invented or translated
              to the handpan in the last few years.
            </p>
          </section>

          {/* //! layout-shootout-minor-scale-comparisons */}
          <section>
            <h2 id="layout-shootout-minor-scale-comparisons">
              Layout Shootout: Minor Scale Comparisons
            </h2>
            <p>
              I think one of the most interesting points about the way handpan
              layouts work is how changing one note, removing one Jenga piece
              from the tower and not always replacing it with another or even
              putting that same note on the top, can vastly change the mood of
              the layout. The easiest way to describe this will be to use the
              Aeolian (Minor) mode in D. Let's take a look at three different
              layouts:
            </p>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              <p>Kurd: D3/ A3 Bb3 C4 D4 E4 F4 G4 A4</p>
              <p>Amara: D3/ A3 C4 D4 E4 F4 G4 A4 D5</p>
              <p>Ursa Minor: D3/ A3 Bb3 D4 E4 F4 G4 A4 D5</p>
            </div>
            <p>
              Notice how they all begin the same way, but differ on their second
              and third notes. These subtle differences, and the available
              melodies due to them, will greatly change the way that the
              handpanist responds to the emotional journey created by said
              intervals. Music is math and also a language, and like words, the
              spaces and relationship between notes have an emotional atmosphere
              and impact. As you'll read in the final chapter of this section
              describing the scales, these differences in the emotional journeys
              created have different moods overall and can create very different
              imagery in your mind's eye and bring up specific emotions.
            </p>
            <p>
              The Kurd has one octave resolution point, while Amara and Ursa
              have two. Amara's D4 and D5 resolution points give it a kind of
              “closure” that the Kurd only has between the ding and D4. The Ursa
              Minor's jump from A to Bb3 to D4 brings back the minor-major
              interval jump of the Kurd, but has a much more “Hijaz-like” sound.
              There is also something to be said about where your resolution
              points (octaves) are physically on the layout. The Kurd has 3
              notes before it reaches the first octave, whereas Amara and Ursa
              only have 2, and both resolve on the high D5 whereas Kurd doesn't
              resolve unless extended to 9 notes around the ding (a.k.a. D Kurd
              10).
            </p>
          </section>

          {/* //! extending-compositions-with-extended-layouts */}
          <section>
            <h2 id="extending-compositions-with-extended-layouts">
              Extending Compositions With Extended Layouts
            </h2>
            <p>
              The melodies you're likely to play are heavily shaped by the
              amount of space between octave resolution points, the chords
              available in each tonal range, and how the notes fall under your
              hands when considering which hand is dominant. These factors
              naturally steer you toward certain musical ideas over others. The
              rhythms you might use on certain notes are affected by their
              location, determining what's comfortable, easy or even physically
              possible to play. Sometimes, the emotional impact of two notes
              that never touched in another layout, now suddenly next to each
              other, can open a musical path you didn't know existed. It's hard
              to fully grasp this concept without actually experiencing it
              playing two similar physical handpans like Kurd vs. Amara. An
              experienced musician familiar with rhythmic concepts and ear
              training can simply swap to a different pan and voilà: a new song
              mere minutes later!
            </p>
          </section>

          {/* //! ergonomics */}
          <section>
            <h3 id="ergonomics">Ergonomics</h3>
            <p>
              When extending layouts, makers often consider the physical
              possibilities with interferences, but also the ergonomics of how
              it's played with hand-to-hand style. Sometimes they choose to
              place certain notes as mutant notes on the top shell instead of
              the front of the bottom shell, because the melodies made possible
              with smaller movements over these much shorter distances are
              prettier and/or easier to play. This can also make double strokes
              in that range possible as well, which is a very useful technique
              when trying to play more complex, syncopated or polyrhythmic
              melodies. Eric “Amarok” Sero and Pablo Piris of Piris Instruments,
              two of my favorite handpanists and musicians, both do this often
              in many of their videos online.
            </p>
          </section>

          {/* //! out-of-key-notes */}
          <section>
            <h3 id="out-of-key-notes">Out of Key Notes</h3>
            <p>
              Many makers have chosen to add notes that are missing to the
              bottom shell to have multiple layouts be possible in a single pan.
              This could mean adding 4th, 6th or 7th scale degrees on the bottom
              shell to open up the ability to play both Kurd or Amara on one
              pan, or Hijaz on either of those layouts. For example, B2 Mystic
              has been extended on the bottom shell to also include the notes
              for scalar playing (playing the notes of a particular scale in
              correct solfeggio order) of the Aeolian mode layouts Kurd, Amara,
              Waples, Ursa Minor, Integral and a 7-note version of Mystic. In
              this format, you can access these different moods, although
              probably not in the same rhythmic ways as having those scales on
              the top shell. Scalar play would be most useful for single note
              melodies and split hand arpeggios to accompany a pan whose top
              shell is made in the layout and key you're playing, so maybe the
              Waples or Integral notes matching a top-shell-only pan in one of
              those layouts.
            </p>
          </section>

          {/* //! handpan-scale-glossary */}
          <section>
            <h1 id="handpan-scale-glossary">Handpan Scale Glossary</h1>
            <p>
              This section lists the typical handpan scales you can order today
              from virtually any maker. Outside of this list there are a
              plethora of scales that were only really ever offered en masse by
              PANArt, and perhaps copied by some of The Big Five, but are
              largely abandoned. Some makers have collaborated with handpanists
              on custom scales, or simply offered new experiments that often get
              snatched up by the virtuosos. A2 Jabbar, A3 Lady Maria and Gb2
              Surna/Shambhala/Australis/Shangri-la (four Nordlys and La Sirena
              fusions) are a few examples that come to mind.
            </p>
            <p>
              Each scale is accompanied by the Western modal definition and a
              short description of what it sounds like in more poetic terms. I
              imagined this specific chapter to be one of the most useful and
              often read in the entire book, and quite likely the most useful
              for new players who feel overwhelmed by all the physics and theory
              vocabulary thrown around by more seasoned players. Pentatonic
              scales tend to be more introspective, while hexatonic scales are
              almost always dreamy, nostalgic and mysterious. I might be the
              only one who thinks this, but it's something I've noticed over the
              years. Each time I hear this ambiance and count the notes, I have
              an “Aha!” moment when I see a layout is hexatonic (Ursa Minor,
              Aegean, Nordlys, Oxalista, Mystic, Equinox, Ysha Savita).
            </p>
            <p>
              I must stress that playing other layouts in a certain key is a
              good idea before settling on D Kurd simply because someone told
              you “everyone starts with Kurd” or “It's the easiest scale” (not
              true, there is no 'easiest' to play, it's subjective) or “that's
              what all the YouTube tutorials are on,” which are horrible reasons
              to choose a certain layout. Over 90% of the time you're going to
              be playing handpan alone, as there may not be handpanists with the
              same key/layout or any nearby at all. In my case, oftentimes there
              are no musicians at all who understand how to play in specific
              keys or what that even means, so you might as well choose the
              layout and tonality that touches your soul and feels like the one
              you wish to express yourself with, because you're going to play it
              alone the vast majority of the time.
            </p>
            <p>
              Music is a language and is amazing when shared with others, but is
              primarily a means by which to connect deeper to one's own soul,
              and focusing on the external and what everyone else is doing or
              likes is the exact opposite. More people than I can even count,
              both interviewees and not, have exclaimed that the handpan is the
              perfect tool for doing this exact type of deep dive into oneself
              and exploring your emotions. Find the scales that best help you
              find yourself! When you feel comfortable with where you are on
              that journey, or have done it on previous instruments, maybe then
              reach out to play with others!
            </p>
          </section>

          {/* //? minor-scales */}
          <section>
            <h1 id="minor-scales">Minor Scales</h1>
            <p>
              I will begin with the minor scales since people buy this vastly
              more often than major and harmonic minor scales. Also, apologies
              ahead of time for showing blatant favoritism to some scales that
              have obviously inspired me more than others, haha! Let's jump in!
            </p>
          </section>

          {/* //! kurd */}
          <section>
            <h2 id="kurd">Kurd (Aeolian)</h2>
            <p>
              In the right hands, it can sound mysterious or even Hijaz-like if
              played the right way rhythmically. It's named after maqam Kurd
              from Arabic music traditions, so this makes sense. Overall I find
              Kurd to be a poppy, upbeat scale that sounds like being at the
              beach with warm, fair-weather and a soft breeze. It's touted as
              the “easiest scale to play,” but I very strongly beg to differ and
              say that literally all of the other minor scales below are more
              consonant and prettier sounding, especially when extended, and
              create more chords that feel and sound great to play. Kurd is
              great if you want to follow tutorial videos online, but once you
              get out of beginner land, it's on equal ground in that sense with
              any other scale.
            </p>
          </section>

          {/* //! celtic-minor-amara */}
          <section>
            <h2 id="celtic-minor-or-amara">Celtic Minor/Amara (Aeolian)</h2>
            <p>
              A softer, more approachable layout of the minor scale with a very
              strong “Irish jig” sound to it (hence the name), especially if you
              play it with swung, bouncy rhythms. The E Amara 20 has become the
              defacto poster-child of this scale. The Amara has one of the most
              satisfying resolutions of any scale I've played - either at the
              high E5 or lower E4 octave, especially when playing chords. This
              scale feels like a big, cozy hug, full of emotional expression and
              inspiration.
            </p>
          </section>

          {/* //! pygmy-low-pygmy */}
          <section>
            <h2 id="pygmy-and-low-pygmy">
              Pygmy/Low Pygmy (Pentatonic Aeolian)
            </h2>
            <p>
              Mysterious, dreamy, open scale that typically spreads across a
              bigger range due to being pentatonic. I personally feel I'm
              transported to a magical, secret garden with subtle East-Asian
              vibes when I play this, especially the F2 Low Pygmy variant. It
              can be introspective and meditative or celebratory and triumphant,
              but being between major and minor, tends to feel more neutral in
              color and mood, like a calm brown or forest green.
            </p>
          </section>

          {/* //! integral */}
          <section>
            <h2 id="integral">Integral (Hexatonic Aeolian - Omits 4°)</h2>
            <p>
              This layout, like most hexatonics, has a dreamy, mysterious
              ambiance and makes me feel as though time has stopped and my
              breath with it. It transports me into a long-forgotten sacred
              grotto hidden deep in the jungle, tucked inside ancient mountains
              devoid of humanoid creatures for millennia. Towering waterfalls
              cascading into trickling pools down the mountainside, massive
              rocks covered in moss and vines of wildflowers, a soft sunlight
              peeking through the canopy overhead, statues with faces carved
              into them littering the edges of the space. This atmosphere is
              especially strong with and shines particularly on the extended
              layout, which I recommend as with the Kurd. It feels like a
              powerful yet gentle presence that has lived there for eternity.
              The nerd in me feels as though I'm somewhere on Tallon IV from
              Metroid Prime.
            </p>
          </section>

          {/* //! la-sirena */}
          <section>
            <h2 id="la-sirena">La Sirena (Dorian + Maj7)</h2>
            <p>
              Ahh, La Sirena! The most mysterious and murky of all the handpan
              layouts that exist. When I hear this scale, I feel as though I've
              scuba dived into an underwater tunnel and as it goes on, the walls
              transition into a kind of transparent crystal with rings of
              rainbow-colored lights pulsing in rings that run along the entire
              circumference and length of the tunnel. I can see giant squids and
              jellyfish, and all sorts of fish big and small, all equally
              bioluminescent and pulsing along with the music. This scale feels
              like an underwater wonderland, but one that is very slowly
              churning, ebb and flow, like the waves on the shore of a beach.
              This scale has been called “jazzy” by literally everyone who
              describes it to me, and I don't disagree! I feel its Dorian nature
              makes it feel hypnotic and impulses you to keep playing and going
              deeper, not unlike the lure of the siren for which it's named.
            </p>
          </section>

          {/* //! akebono-hokkaido */}
          <section>
            <h2 id="akebono-or-hokkaido">
              Akebono 8 / Hokkaido 9 (Japanese Pentatonic)
            </h2>
            <p>
              Akebono is one of the quintessential Hang and early handpan
              scales, and a “love it or hate it” scale for many. It's deep and
              hypnotic for a pentatonic scale. It also feels like being
              transported to 7th century Japan in the land of samurai-led
              shogunates. The extension of Akebono to Hokkaido with 8 notes
              around the ding solidifies that atmosphere much more strongly, and
              pulls you even deeper into the hypnotic dance that this layout
              exemplifies. I hope that the Hokkaido extension brings the Akebono
              haters a change of heart.
            </p>
          </section>

          {/* //! voyager */}
          <section>
            <h2 id="voyager">Voyager (Pentatonic Aeolian)</h2>
            <p>
              This layout is similar to Pygmy being that it's pentatonic. The
              interval order is slightly different, but the ambiance is the
              same: the feeling of focus, presence and clarity (especially when
              it's made on very low register dings). These pentatonic minor
              scales can feel very grounding and centering, and the pentatonic
              nature of this scale makes melodic resolution very easy and
              comfortable to navigate. It reminds me of Amara heavily, but the
              one missing scale degree gives it a slightly darker or heavier
              vibe, which is in line with how I feel the Pygmy layouts.
            </p>
          </section>

          {/* //! magic-voyage */}
          <section>
            <h2 id="magic-voyage">Magic Voyage (Pentatonic Aeolian)</h2>
            <p>
              Yet another cousin to the Pygmy scale, but this time a dreamier
              start at the bottom of the scale before rising up into the clear
              presence of the Low Pygmy scale. This layout has a more open and
              brighter feeling than Pygmy that will take you on a journey
              through the clouds and into the sunset. Whether you're feeling
              meditative or percussive and fiery, this layout can calm you down
              or raise you up depending on how you approach it.
            </p>
          </section>

          {/* //! ursa-minor */}
          <section>
            <h2 id="ursa-minor">Ursa Minor (Hexatonic Aeolian)</h2>
            <p>
              This layout feels like laying in the sand dunes of the desert
              outside an ancient Arab city at night, the full moon and stars
              beaming brightly above, with a cool and sweet breeze gently
              blowing over you. As you play the scale further and further, you
              begin to lift up, off the ground, and float up into the cosmos. I
              love to call this layout “Moonlight Hijaz.”
            </p>
          </section>

          {/* //! mystic */}
          <section>
            <h2 id="mystic">Mystic (Hexatonic Aeolian)</h2>
            <p>
              Mystic is exactly like its sister Ursa Minor above, but with
              different scale degrees for the final three notes. This gives it
              the same “Moonlight Hijaz” vibe in the bottom half of the scale,
              but with a brighter top end. Low Mystic feels a bit more
              melancholy than Ursa Minor, while the normal layout's final
              intervals sound more open and happier.
            </p>
          </section>

          {/* //! equinox */}
          <section>
            <h2 id="equinox">Equinox (Hexatonic Aeolian)</h2>
            <p>
              While also a hexatonic layout like its siblings, Ursa Minor and
              Mystic, this particular layout feels and sounds more joyful and
              hopeful rather than mysterious, melancholy or darker. The bottom
              half of this layout gives that hopeful, uplifting feeling while
              the last few notes give a hint of mysteriousness like its
              siblings. The combo of a jazzy minor and bright major chord
              results in this sweet, smooth sounding atmosphere.
            </p>
          </section>

          {/* //? major-scales */}
          <section>
            <h1>Major Scales</h1>
            <p>
              Quick note: I have to be honest that the majority of these layouts
              all sound the same and don't give me drastically different
              experiences when listening to them. The Ionian and Lydian modes
              (two major scales) generally sound the same on the handpan and all
              give “peaceful, playful vibes full of sunshine in the morning.” If
              that's what you're looking for, you really can't go wrong with
              anything listed here. Listen to some examples and pick what you
              like best. Aegean and Nordlys are surprisingly different, but
              still major-leaning overall.
            </p>
          </section>

          {/* //! ashakiran */}
          <section>
            <h2 id="ashakiran">Ashakiran (Lydian)</h2>
            <p>
              No matter who I hear play it, this layout consistently gives me
              beautiful, fairytale-like sensations. I imagine beautiful castles
              and people dressed in medieval styles. Ashakiran feels full, like
              a big warm hug from the sun. Some people playing this make it feel
              very epic and triumphant.
            </p>
          </section>

          {/* //! sabye */}
          <section>
            <h2 id="sabye">Sabye (Lydian)</h2>
            <p>
              Pronounced “sah-bai,” This version of Lydian feels like a romp
              through a field of flowers, or the ecstatic start of a journey by
              a story's protagonist. Rather than the grandiose and sunshine
              vibes of Ashakiran, this feels more subdued and calm, very
              peaceful and slow, like a trickling stream in a forest.
            </p>
          </section>

          {/* //! golden-gate */}
          <section>
            <h2 id="golden-gate">Golden Gate (Lydian)</h2>
            <p>
              This layout feels curious, slow and unfurling, like a flower
              opening in the morning light, animals waking up, and life starting
              its daily routine. It's very soft and calm in typical Lydian
              fashion like its two siblings Ashakiran and Sabye.
            </p>
          </section>

          {/* //! paradiso */}
          <section>
            <h2 id="paradiso">Paradiso (Pentatonic Ionian)</h2>
            <p>
              Paradiso is similar to the previous layouts in this list, yet it
              feels more “rounded out” in that it's pentatonic, repeated-notes
              nature, so it feels more balanced and full because of these extra
              “matching pairs.” There is a bit more of a cinematic or
              storytelling vibe for me with this one in particular.
            </p>
          </section>

          {/* //! oxalis-ta */}
          <section>
            <h2 id="oxalis">
              Oxalis/ta (Pentatonic/Hexatonic Ionian - Omits 7°/Adds 4°)
            </h2>
            <p>
              This particular layout has a very dreamy and introspective feeling
              to it. It feels like a sunshower, but without being overly sappy
              like other major scales. The Saraz Oxalista “added the A back in,”
              a play on words with the name and also literally adding the
              missing A note back into the G Major layout, making it hexatonic.
            </p>
          </section>

          {/* //! aegean */}
          <section>
            <h2 id="aegean">
              Aegean (Pentatonic Lydian - Omits 6° & 7° in non-extended
              versions)
            </h2>
            <p>
              Many say that this one's name suits it perfectly and that it aptly
              represents the feeling of being at the Aegean sea on the Greek
              islands very well. It is moody and mysterious, and can be either
              tense and moody or very smooth and dreamy depending on the play
              style. It's interesting to me that it can be so close to the
              Nordlys scale in terms of the theoretical scale used, but a
              slightly different arrangement of the notes, and omitting an extra
              one, completely changes the vibe to one more melancholic than the
              euphoric possibilities of the Nordlys, for example.
            </p>
          </section>

          {/* //! nordlys */}
          <section>
            <h2 id="nordlys">Nordlys (Hexatonic Lydian - Omits 7°)</h2>
            <p>
              Easily one of my favorites and the newest layout to become
              popular, created by Eric “Amarok” Sero and Jordi of Manik in late
              2019 and released in early 2020. “Northern Lights” in Norwegian
              most definitely captures the feeling of being in the Norse forests
              looking up at those awe-inspiring, electro-magnetic wonders and
              feeling the vast expanse of both terrestrial and non-terrestrial
              space. I often say it feels “lofty,” as though you're floating
              endlessly through the layers of the atmosphere and back down into
              the clouds and up again. It's a layout that fluidly ebbs and flows
              between a feeling of nostalgia, both melancholic and euphoric.
            </p>
          </section>

          {/* //! ysha-savita */}
          <section>
            <h2 id="ysha-savita">Ysha Savita (Hexatonic Ionian - Omits 6°)</h2>
            <p>
              Ysha Savita is melodic nourishment for the soul, optimistic and
              full of hope. It's a peculiar major layout that doesn't share the
              same cliché sappiness. Its dreaminess is balanced with slightly
              melancholic nostalgia. It's a crowd favorite and unlike most early
              layouts, it still remains relevant and popular today.
            </p>
          </section>

          {/* //! raga-desh */}
          <section>
            <h2 id="raga-desh">Raga Desh (Pentatonic Mixolydian)</h2>
            <p>
              This one is a playful, cheery layout taken directly from Indian
              Carnatic music. It will transport you deep into the jungles of
              Kerala, leisurely walking along a river bank with birds chirping
              and cicadas buzzing, the mid-morning sunrise warming everything
              around you while the morning breeze wafts gently through the
              trees. I adore this layout when extended with bottom notes that
              open up maqam Hijaz when snuck in between the top shell notes. I
              highly recommend that extension for intermediate to advanced
              players looking for a “spicy major” handpan (which doesn't exist
              besides Onoleo, which I find limiting, whereas this feels deeply
              expressive).
            </p>
          </section>

          {/* //! harmonic-minor-scales */}
          <section>
            <h1>Harmonic Minor Scales</h1>
          </section>

          {/* //! hijaz */}
          <section>
            <h2 id="hijaz">Hijaz (Phrygian Dominant)</h2>
            <p>
              Ahh, the classic Hijaz! This is a crowd pleaser for sure, and a
              time-tested favorite of all percussionists that have joined the
              handpan community (as you can guess from my massive description of
              it). The nature of playing maqamat (scales) in small parts (the
              two jins, or ajna plural) is perfectly matched in the handpan's
              diatonic nature. This scale feels like being in an old Arab market
              with the citizens and travelers hustling and bustling about,
              hagglers shouting and advertising their goods, while children and
              animals scream and squawk through the streets. The hot desert air
              and sun beating down from above can be felt through this scale.
              It's both deeply emotional and can be joyful and uplifting,
              depending on how you play it. Some have even described Hijaz as a
              desert warrior riding a horse along the dunes, overwatching his
              city nearby. If you've ever heard music in any Hollywood movie
              while in a desert, more likely than not it was using maqam Hijaz,
              named after the region in Saudi Arabia it hails from.
            </p>
          </section>

          {/* //! romanian-hijaz */}
          <section>
            <h2 id="romanian-hijaz">Romanian Hijaz (Ukrainian Minor)</h2>
            <p>
              This is allegedly the most difficult layout to play and compose
              with according to most of the community, alongside La Sirena. The
              two tension points within it do make it a very deeply emotional
              layout. It gives a Eurasian blend of both Hijaz and a deeply
              melancholy minor feeling of struggle and sadness that (given the
              name as an admitted bias in influencing this description) makes me
              think of eastern European ballet, folk or “gypsy” music. This
              layout tells the tales of the woes of the human experience and
              human drama pretty universally for all who hear or play it. It's
              really crazy how accurate this description is once you hear it
              being played. If you are looking for something very unique and
              challenging, romantic and deeply poetic, then maybe this is the
              scale for you. While this may not be for everyone, the chords can
              be so colorful and deeply expressive in ways that no other layouts
              are. Don't be afraid of this description, though! This will likely
              be very interesting for intermediate to advanced players looking
              for something very different and fresh, but I have interviewed two
              players who began on this layout and now own it in multiple keys,
              extended and not, and absolutely love it. I sold one to an
              intermediate player and she has been soaring with it in ways that
              I never thought to play it myself and adores it. Try one out with
              a friend before buying, but do try it at least once, it's quite an
              experience!
            </p>
          </section>

          {/* //! saladin */}
          <section>
            <h2 id="saladin">Saladin (Phrygian Dominant - Alt. Hijaz)</h2>
            <p>
              A one-note-different arrangement of the Hijaz layout, so I would
              give the same description as before, but add that Saladin feels
              fuller or deeper because of that shift, jumping from the “root”
              note on the ding to the 4th scale degree instead of 5th as with
              Hijaz (D3/ G3 vs. D3/ A3). Just as with Kurd, Amara and Ursa
              Minor, removing or adding one note in a sequence can greatly
              affect the melodies or chord progressions you're likely to play,
              and this is the Hijaz version of that experience.
            </p>
          </section>

          {/* //! klezmara */}
          <section>
            <h2 id="klezmara">Klezmara (Phrygian Dominant - Klezmer)</h2>
            <p>
              As the name suggests, this is a traditional scale in Jewish
              Klezmer music. This particular form of harmonic minor feels much
              more mysterious and a bit less tense than Hijaz and Saladin. It
              differs by one note and that, again like the Kurd/Amara/Ursa Minor
              trio makes all the difference. This alteration of maqam Hijaz
              feels slightly more triumphant, open and emotionally distinct from
              Hijaz in a way I find difficult to describe in words due to this
              simple note change.
            </p>
          </section>

          {/* //! onoleo */}
          <section>
            <h2 id="onoleo">Onoleo (Harmonic Major)</h2>
            <p>
              Onoleo is the only layout (other than blending Raga Desh with
              Hijaz) that gives a “spicy major” vibe, but one that feels much
              closer in mood to the Romanian Hijaz layout than Hijaz or Raga
              Desh. This scale is literally “Dance of the Sugar Plum Fairies” on
              a handpan (check out the video by Fabio Stomato on YouTube, the
              transition into bossa nova is amazing!), but sadly that is the one
              mood and ambiance that it provides. It's one of the few “one trick
              pony” layouts that isn't versatile, unfortunately, and its
              popularity reflects that status.
            </p>
          </section>

          {/* //! practical-notes-for-the-aspiring-buyer */}
          <section>
            <h1 id="practical-notes-for-the-aspiring-buyer">
              Practical Notes for the Aspiring Buyer
            </h1>
            <p>
              This section of the book is simply going to be bulleted points to
              keep in mind when buying handpans. Straight shooting without the
              fancy frills: just helpful tips I can think of based on my own
              mistakes and things others have echoed in the interviews. If you
              do anything when buying one, please, please, PLEASE follow these
              rules!
            </p>
          </section>

          {/* //! buying-a-handpan */}
          <section className="physics-lists">
            <h2 id="buying-a-handpan">Buying a Handpan</h2>

            <div>
              <p>
                <span className="golden">
                  Watch hundreds of videos on YouTube and Instagram.
                </span>{" "}
                Find layouts you like and then search for that scale key/name
                and watch many different handpanists play it. Pay close
                attention to how their styles make that same layout sound very
                different. If you're still convinced you love that particular
                one, find the maker with the “best quality for price” for you
                and go for it! Save and get your dream instrument! Just make
                sure that you're aware of whether you like: the song, the
                layout, the maker of that particular handpan in the video, that
                particular player, or you like that particular type of steel
                (stainless, ember, low carbon or nitrided).
              </p>
            </div>
            <p>
              Today, the vast majority of makers will{" "}
              <span className="golden">
                ask for a deposit up front and you pay the rest of the amount
                upon instrument completion, plus shipping costs, hardcase, etc.
              </span>{" "}
              If a maker is being pushy with you about money: Run. 9 times out
              of 10 it's going to end poorly for you. Don't deal with anyone who
              makes you uncomfortable or feels strange in the communications or
              “rules” about how they run their business. I guarantee you there
              are at least 50 other people with similar quality and prices
              without any weird energy.
            </p>
            <p>
              <span className="golden">
                The person you choose is going to be putting their heart and
                soul into your instrument, so you want to be sure that aligns
                with you.
              </span>{" "}
              You'll likely go back to this maker for re-tuning and will have
              some kind of friendship with them ideally, so you want to pick
              someone that you connect with. Any of the makers in the interviews
              (check the website attached to this book) would be a great choice.
              Feel free to email me if you need further suggestions or
              information not listed there, as I do know many, many more than
              those who I was able to interview.
            </p>
            <p>
              <span className="golden">
                A quality handpan should cost somewhere between $1500-2000 for a
                standard 8+ ding handpan in stainless steel, sometimes even
                ember. This is typically written as “D Amara 9.”
              </span>{" "}
              There are very few exceptions to this rule and some makers do
              offer “student” models that are cheaper, while still being stable
              and sounding beautiful. Perhaps they remove aesthetic touches, or
              don't sell the instrument with a case in order to keep costs down.
              I've personally encountered some makers who charge only $1000 for
              the same ember steel standard pans that others charge $2100-2400.{" "}
              <span className="golden">
                I highly recommend avoiding mass-produced pans from companies
                like Sela/Novapan/Asteman
              </span>
              . They are not specialists in handpans and lack the years of study
              and hard work necessary to make high quality, stable instruments.{" "}
              <span className="golden">
                Avoid anything on Amazon, Aliexpress, Guitar Center
              </span>{" "}
              or any similar marketplace or music store: these are even worse
              than the aforementioned brands. This is simply not where{" "}
              <em>high-quality handpans</em> come from. The money you waste, on
              what I consider toys at best, would be much better spent as a
              deposit towards a real handpan, not some cheap knockoff. Buying
              from them is like getting an instrument from a deparment store in
              the shopping mall. It might make a sound, but that sound will be
              crap.
            </p>
          </section>

          {/* //! pantam-vs-handpan */}
          <section>
            <h2 id="pantam-vs-handpan">Pantam vs. Handpan</h2>
            <h3>
              A pantam is <em>the exact same thing</em> as a handpan
            </h3>
            <p className="chapter">
              It's just another name someone came up with for the instrument
              based on the steelpan and the ghatam's names put together.
            </p>
            <p>
              If someone tries to sell you an "<em>exclusive pantam,</em>" with
              claims of superior quality or radically different production
              methods “<em>compared to handpans</em>,” they're a snake oil
              salesman, and it's best to walk away. Fast. I'm speaking from
              personal experience here. If someone uses pantam because they
              simply like the name, or feel it respects the roots of the handpan
              better, that's cool and another story altogether. This point is if
              they're{" "}
              <em>
                claiming they're different and giving a better/worse comparison
              </em>
              , you probably want to be very careful with that person or avoid
              them altogether. Self-proclaimed greatness is a massive red flag
              in general, no?
            </p>
            <p>
              When it comes to the intimate bond formed between a handpanist and
              maker, you don't want to be dealing with dishonest or egotistical
              types. The relationship between performer and maker matters quite
              a lot! The creator of your pan is pouring days upon days of their
              personal energy into your instrument. <em>Ideally</em>, they're
              building it with <em>you specifically</em> and your requests about
              the sound in mind, not just the money they'll make for churning
              out another instrument. Also, being consistently in contact with
              you if you have questions or concerns, happy to help and inform
              you thoroughly and honestly in your journey to find the layout
              that best suits your needs and skill level, and having good
              customer service in general are green flags to look for. You'd be
              surprised how many people utterly fail in one or many of these
              regards.
            </p>
            <h3>
              Personal rant: A "hang drum" is also just a handpan, but named by
              someone ignorant with little to no respect and/or awareness of the
              history of the instrument or the science behind it.
            </h3>
            <section>
              <div style={{ display: "inline" }}>
                <p className="crimson">
                  Yes, I know I'm a hater. I'm okay with that.
                </p>
                <p>My point is still correct:</p>
                <p className="golden">
                  Handpans are not Hangs, and none of the instruments are drums.
                </p>
                <p className="golden">End of story.</p>
              </div>
              <p>
                It's really odd to see people professionally playing (much
                better than me, mind you, admittedly!) or making instruments
                that don't even understand what family the instrument belongs to
                (idiophones, not membranophones) to properly speak and write
                about it. They're most likely just trying to cash in on the fame
                of the Hang, plagiarizing the trademarked name on purpose for
                social media reach. I think any self-respecting maker or player
                would use proper vocabulary to refer to the instrument. "Hank-uh
                Droom-uh" they say. Makes my skin crawl and blood boil...
              </p>
            </section>
          </section>

          {/* //! handpan-care */}
          <section>
            <h2 id="handpan-care">Handpan Care</h2>
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
              <em>
                I apologize for the capitalization here but these points are
                direly important!!
              </em>
            </h3>
            <h3>
              NEVER PLAY YOUR HANDPAN IN THE SUN AND DO NOT STORE IT IN DIRECT
              SUNLIGHT OR IN YOUR CAR IN SUMMER - EVER! EVEN AND ESPECIALLY IN
              THE CASE!
            </h3>
            <p>
              The heat will cause the metal to expand and the notes to detune,
              potentially permanently. If you play the heated handpan you will
              definitely dent and deform the softened metal and detune the
              notes. This can result in many hundreds of units of your currency
              ($/€/£, etc.) being spent on shipping both ways and paying a maker
              to retune the pan, on top of potentially waiting months to get it
              back if the maker is really busy with a wait list of orders that
              will usually take precedence over your retune.
            </p>
            <h3>DO NOT PLAY IT LIKE A DRUM!</h3>
            <p>
              Handpans are extremely delicate for being made of metal and being
              so large and heavy. The shells are a mere 1-1.2mm thick, and
              smacking it like a djembe will 100% lead to denting the metal and
              detuning the tone fields. Imagine that ever hard strike,
              regardless of the finger used, is causing hairline fracture
              amounts of detuning to the notes. Multiple that over repeated
              strikes at that velocity over days (or even under an hour!) and
              you've got a recipe for a very, very sad-sounding handpan.
            </p>
            <h3>DON'T USE ALCOHOL ON YOUR PAN!</h3>
            <p>
              It might be okay with stainless steel, but with other types it
              could potentially remove special coatings that exist to help
              prevent corrosion, and lead to almost instant rust/corrosion. This
              happened to an acquaintance of mine in 2024 with a carbon steel
              instrument. Within days, the entire top of the pan was severely
              rusted in big, amoeba-shaped patches. Admittedly, maybe not all
              pans would be so drastically affected, but it's probably best to
              be on the safe side and not ruin your handpan. Ask the maker for
              care instructions for each instrument.
            </p>
            <h3>
              Stainless steel is resistant to corrosion, but not impervious!
            </h3>
            <p>
              It can develop tiny white marks the size of a pinhead that are
              basically “stains.” Your pan should only need to be oiled every
              two weeks or so, unless you play for hours daily. This can be done
              with gun cleaning oil/paste. “Handpan oils” are essentially
              rebranded gun cleaning products and typically cost more for less
              quantity and the same result. This is also why nobody who sells it
              will tell you what it's made of - so now you know! Get a
              microfiber cloth, put a light amount of oil on the pan (maybe
              10-15 drops or a similar amount of paste on the ding) and wipe it
              down in circles around the whole body. Make sure that the pan is
              evenly coated . Frog Lube and CLP Plus Paste are two brands you
              can find online in the US. In Europe, I would suggest Ballistol,
              but check with your local maker first. I say get whatever works
              and is most cost-effective.
            </p>
            <h3>Don't keep your handpan in a closed case constantly</h3>
            <p>
              Especially if you live in a humid region, so condensation doesn't
              form. If possible, set it on top of the soft case, pushing the top
              down to make a bowl shape, or just open the hardcase. I would
              argue that even just having the hard case unzipped halfway and
              cracked while it leans up against the wall on the floor is fine
              and would be a viable compromise if you have little space.
            </p>
            <p>
              The best case scenario for (safer) storage is buying a large
              shelving unit that's deep enough to store your pans against a wall
              in your home. Watch any professional player's videos in their
              studio/bedroom or a maker's showroom/workshop and you'll see what
              I mean. Personally, I got a “Muscle Rack” on HomeDepot's website
              (look it up and find something similar in your region) that was
              wide enough for 2 handpans per shelf, and can store 8 pans, with
              some soft cases underneath, on the bottom shelf at floor level.
              Some people have IKEA-looking square shelving, but I never learned
              where they're buying them from.
            </p>
            <h3>
              Makers don't want to tune your crappy $200-500 Amazon
              pan/Novapan/Asteman/Bali Steel knock-off/toy "handpan"
            </h3>
            <p>
              I imagine many makers would ignore your request when they realize
              what you have. If they DO answer and say yes, expect to get given
              a really high price for asking them to tune something that
              directly competes with them on a scale they cannot physically
              compete with and threatens their livelihood by mass-producing
              garbage instruments that are toys at best. Those tin cans take
              away potential customers from supporting artisans, and cause a
              massive misconception in what they're actually worth. I'm honestly
              shocked when I hear of makers tuning these glorified stirfry woks,
              and respect them in a way for being more compassionate than I
              would be.
            </p>
          </section>

          {/* //! lessons */}
          <section>
            <h2 id="lessons">Lessons</h2>
            <p>
              I'm so glad that this came up in the interviews with some of the
              veteran makers and players. They said, and I agree, new
              handpanists should play on their own for a few months before
              seeking out lessons with someone. Learn the basics from YouTube,
              then go write your own melodies and patterns! Find your own voice,
              express yourself, and connect with yourself via music.
            </p>
            <p>
              Many people who play handpan began their musical journeys on it.
              Maybe tried other instruments that didn't feel right. There's
              something beautiful about taking the time to figure out how you
              express yourself on the handpan before absorbing external
              influences.
            </p>
            <p>
              Listening to music is one thing, but being instructed is another.
              That said, it's not the end of the world if you begin with
              lessons. This is a friendly suggestion to take a seemingly
              unconventional approach to a very unconventional instrument. Go be
              a UFO pioneer! Please don't abduct any cows or humans, though.
            </p>
          </section>

          {/* //! closing-words */}
          <section>
            <h1 id="closing-words">Closing Words</h1>
            <p>
              Writing this book has been a very long and arduous process and I
              think it would've taken half the time if I had the knowledge I
              have now about what processes I chose to create it that were
              entirely unnecessary (like phone calls versus simple emails for
              interviews). I'm grateful for the connections made, but wish I had
              been more lenient and accepted emailing answers earlier on instead
              of insisting on having a human connection with everyone. Maybe
              some of the people would've jumped at the chance to simply email
              me and I'd have even more interviews to share on the website with
              you all from the get go. Hopefully I can reach back out to those
              people and have them happily join us soon.
            </p>
            <p>
              It's really crazy looking back over these last 3 years at all of
              the friendships formed and deep learning that was had. I've
              learned so much more than I already knew from my many “nerd
              sessions” with other handpanists during my first year playing. So
              much has changed just in the last 3 years since I began
              interviewing that I have had to come back and edit many pages of
              this book multiple times to ensure that the most up-to-date
              information is written. I still feel like I am missing some info
              in here that could be very useful, but I've forgotten about it due
              to not writing down notes someplace reminding me to make entire
              new chapters for it. Something for version 2.0 in another year!
              The project definitely grew into something much bigger than
              originally planned and I think I'm finally feeling good about
              where it ended up as I write this final page.
            </p>
            <p>
              I hope that if you've gotten this far, you've enjoyed whatever
              parts of the book that you did and maybe some of the interviews
              here on the site, that you found both halves of the project
              interesting, helpful or inspiring, and ideally that you would
              recommend them as something of useful quality to a fellow handpan
              fan or aspiring handpanist in your life. Above all, I always
              wanted this book to be as widely accessible as possible and to be
              a helpful resource for anyone who wishes to learn more about the
              handpan. I hope it will reach the hands of as many people as
              possible and that it becomes something at the forefront of
              everyone's minds when it comes to answering any questions newbies
              might have and helping to educate others about the handpan. I'm
              not sure how translating it into all the major languages spoken in
              our global community will work, but hopefully that will become
              economically possible in the near future. For now, I am offering
              it for free on this website so that anyone can access it on any
              device, anytime, anywhere, and in epub and pdf file formats as
              well for downloading to enjoy on eReaders and mobile devices
              offline.
            </p>
            <p>
              Thank you to everyone who helped to make this project possible,
              gave creative suggestions, connected me with handpanists for
              interviews or did one yourself! You've all inspired me both with
              your words and motivation to continue with this massive task and
              to complete the book. I hope that we can crowdfund a physical
              print of it sooner rather than later! I will leave you here with a
              symbolic “singing-the-ding” cheers or salute. I wish each and
              every one of you the best of luck in your journeys with this
              amazing UFO.
            </p>
            <h1>-J.W.</h1>
          </section>
        </div>
      </div>
    </div>
  );
}

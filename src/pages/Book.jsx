import React from "react";
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
              <a href="/" onClick={() => setSidebarOpen(false)}>
                Home
              </a>
              <a href="/about" onClick={() => setSidebarOpen(false)}>
                About
              </a>
              <a href="/book" onClick={() => setSidebarOpen(false)}>
                Book
              </a>
              <a href="/interviews" onClick={() => setSidebarOpen(false)}>
                Interviews
              </a>
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
            <h1 id="the-history-of-the-handpan">
              ~ The History of the Handpan ~
            </h1>
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
              ~ The Steelpan of Trinidad and Tobago ~
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
              festival practices to form a new celebration known as{" "}
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
              The global expansion began in 1950 with Arthur Aldwyn{" "}
              <em>“Boscoe”</em> Holder. His BBC show, <em>Bal Creole</em>, aired
              on June 30th, 1950 and was the first introduction of the steelpan
              to audiences outside of Trinidad and Tobago. The{" "}
              <em>Trinidad All-Steelpan Percussion Orchestra</em> (
              <em>TASPO</em>), was formed by 12 of the best steelpan players
              from various Trinidadian steel bands to participate in the
              Festival of Britain in 1951. The members were all legendary
              steelpan musicians: Winston
              <em>“Spree”</em> Simon (<em>Fascinators/Tokyo</em>), Ellie
              Mannette (<em>Invaders</em>), Anthony <em>“Tony”</em> Williams (
              <em>North Stars</em>), Sterling Betancourt (<em>Crossfire</em>),
              Philmore <em>“Boots”</em> Davidson (<em>City Syncopators</em>),
              Orman
              <em>“Patsy”</em> Haynes (<em>Casablanca</em>), Carlton{" "}
              <em>“Sonny”</em> Roach (<em>Sun Valley</em>), Belgrave Bonaparte (
              <em>Southern Symphony</em>), Andrew <em>“Pan”</em> de la Bastide (
              <em>Chicago</em>), Dudley Smith (<em>Rising Sun</em>), Theophilus{" "}
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
            <h1 id="the-birth-of-the-hang">~ The Birth of the Hang ~</h1>

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
              from <em>PANArt Steelpan-Manufaktur</em> to{" "}
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
        </div>
      </div>
    </div>
  );
}

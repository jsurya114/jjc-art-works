import re

html_content = """
<div class="home-page-jjc">
  <div class="container">
    <div class="column-1-brand">
      <div class="container2">
        <img class="container3" src="container2.svg" />
        <div class="container4">
          <div class="text">JJC</div>
        </div>
      </div>
      <div class="margin">
        <div class="container5">
          <div class="chapel-interiors">CHAPEL INTERIORS</div>
        </div>
      </div>
      <div class="margin2">
        <div class="container6">
          <div class="crafting-sacred-spaces-since-2014">
            Crafting sacred spaces since 2014.
          </div>
        </div>
      </div>
      <div class="container7">
        <div class="link">
          <img class="container8" src="container7.svg" />
        </div>
        <div class="link">
          <img class="container9" src="container8.svg" />
        </div>
        <div class="link">
          <img class="container10" src="container9.svg" />
        </div>
      </div>
    </div>
    <div class="column-2-quick-links">
      <div class="heading-4-margin">
        <div class="heading-4">
          <div class="quick-links">QUICK LINKS</div>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <div class="home">Home</div>
        </div>
        <div class="item">
          <div class="services">Services</div>
        </div>
        <div class="item">
          <div class="portfolio">Portfolio</div>
        </div>
        <div class="item">
          <div class="about-us">About Us</div>
        </div>
        <div class="item">
          <div class="contact">Contact</div>
        </div>
      </div>
    </div>
    <div class="column-3-our-services">
      <div class="heading-4-margin">
        <div class="heading-4">
          <div class="our-services">OUR SERVICES</div>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <div class="chapel-pews">Chapel Pews</div>
        </div>
        <div class="item">
          <div class="altar-furniture">Altar Furniture</div>
        </div>
        <div class="item">
          <div class="custom-woodwork">Custom Woodwork</div>
        </div>
        <div class="item">
          <div class="interior-consultation">Interior Consultation</div>
        </div>
        <div class="item">
          <div class="church-seating">Church Seating</div>
        </div>
        <div class="item">
          <div class="pulpit-design">Pulpit Design</div>
        </div>
      </div>
    </div>
    <div class="column-4-contact">
      <div class="heading-4-margin">
        <div class="heading-4">
          <div class="get-in-touch">GET IN TOUCH</div>
        </div>
      </div>
      <div class="list2">
        <div class="item2">
          <img class="container11" src="container10.svg" />
          <div class="container4">
            <div class="text2">+91 XXXXX XXXXX</div>
          </div>
        </div>
        <div class="item2">
          <img class="container12" src="container12.svg" />
          <div class="container4">
            <div class="text2">WhatsApp Us</div>
          </div>
        </div>
        <div class="item2">
          <img class="container13" src="container14.svg" />
          <div class="container4">
            <div class="text2">info@jjcinteriors.com</div>
          </div>
        </div>
        <div class="item2">
          <img class="container14" src="container16.svg" />
          <div class="container4">
            <div class="text2">Kerala, India</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="html-body-section-cta-banner">
    <div class="container15">
      <div class="label-margin">
        <div class="label">
          <div class="text3">START YOUR PROJECT</div>
        </div>
      </div>
      <div class="heading-2-headline-margin">
        <div class="heading-2-headline">
          <div class="let-s-create-something-meaningful">
            Let&#039;s Create Something Meaningful
          </div>
        </div>
      </div>
      <div class="subtext-margin">
        <div class="subtext">
          <div class="text4">
            Tell us about your space and we will create something truly
            beautiful.
          </div>
        </div>
      </div>
      <div class="buttons">
        <div class="secondary-button">
          <img
            class="tabler-icon-brand-whatsapp"
            src="tabler-icon-brand-whatsapp0.svg"
          />
          <div class="text5">WhatsApp Us Now</div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content-canvas-testimonials-section">
    <div class="container16">
      <div class="header">
        <div class="container17">
          <div class="text6">CLIENT REVIEWS</div>
        </div>
        <div class="heading-2">
          <div class="what-our-clients-say">What Our Clients Say</div>
        </div>
      </div>
      <div class="review-cards-grid">
        <div class="card-1">
          <div class="div">&quot;</div>
          <div class="margin3">
            <div class="container18">
              <div
                class="jjc-completely-transformed-our-chapel-the-pews-are-beautifully-crafted-and-built-to-last-for-generations-to-come"
              >
                JJC completely transformed our chapel. The
                <br />
                pews are beautifully crafted and built to last
                <br />
                for generations to come.
              </div>
            </div>
          </div>
          <div class="container19">
            <div class="container20">
              <div class="text7">★★★★★</div>
            </div>
            <div class="heading-42">
              <div class="fr-thomas-joseph">Fr. Thomas Joseph</div>
            </div>
            <div class="container5">
              <div class="st-mary-s-chapel-thrissur">
                St. Mary&#039;s Chapel, Thrissur
              </div>
            </div>
          </div>
        </div>
        <div class="card-2">
          <div class="div">&quot;</div>
          <div class="margin3">
            <div class="container18">
              <div
                class="the-altar-they-built-for-us-is-absolutely-stunning-every-detail-was-crafted-with-such-care-and-precision"
              >
                The altar they built for us is absolutely
                <br />
                stunning. Every detail was crafted with such
                <br />
                care and precision.
              </div>
            </div>
          </div>
          <div class="container19">
            <div class="container20">
              <div class="text7">★★★★★</div>
            </div>
            <div class="heading-42">
              <div class="pastor-david-emmanuel">Pastor David Emmanuel</div>
            </div>
            <div class="container5">
              <div class="grace-fellowship-church-kochi">
                Grace Fellowship Church, Kochi
              </div>
            </div>
          </div>
        </div>
        <div class="card-3">
          <div class="div">&quot;</div>
          <div class="margin3">
            <div class="container18">
              <div
                class="professional-skilled-and-truly-understand-the-sacred-nature-of-the-work-they-do-highly-recommended"
              >
                Professional, skilled, and truly understand the
                <br />
                sacred nature of the work they do. Highly
                <br />
                recommended.
              </div>
            </div>
          </div>
          <div class="container19">
            <div class="container20">
              <div class="text7">★★★★★</div>
            </div>
            <div class="heading-42">
              <div class="fr-sebastian-mathew">Fr. Sebastian Mathew</div>
            </div>
            <div class="container5">
              <div class="sacred-heart-chapel-palakkad">
                Sacred Heart Chapel, Palakkad
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content-area">
    <div class="section">
      <div class="left-column-image">
        <img
          class="craftsman-working-on-wood"
          src="craftsman-working-on-wood0.png"
        />
        <div class="gradient-fade"></div>
      </div>
      <div class="right-column-content">
        <div class="margin3">
          <div class="container5">
            <div class="who-we-are">WHO WE ARE</div>
          </div>
        </div>
        <div class="heading-1-margin">
          <div class="heading-1">
            <div class="built-with-faith-crafted-with-hands">
              Built with faith, crafted
              <br />
              with hands
            </div>
          </div>
        </div>
        <div class="margin4">
          <div class="container21">
            <div
              class="jjc-has-been-serving-chapels-and-churches-for-over-a-decade-every-piece-we-create-is-built-to-honour-the-sacred-space-it-will-inhabit-from-the-first-sketch-to-the-final-polish"
            >
              JJC has been serving chapels and churches for over a decade.
              <br />
              Every piece we create is built to honour the sacred space it will
              <br />
              inhabit — from the first sketch to the final polish.
            </div>
          </div>
        </div>
        <div class="stats-row-margin">
          <div class="stats-row">
            <div class="vertical-border">
              <div class="container5">
                <div class="_25">25+</div>
              </div>
              <div class="margin5">
                <div class="container5">
                  <div class="years-of-craft">Years of craft</div>
                </div>
              </div>
            </div>
            <div class="margin6">
              <div class="vertical-border2">
                <div class="container5">
                  <div class="_60">60+</div>
                </div>
                <div class="margin5">
                  <div class="container5">
                    <div class="projects-completed">Projects completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="margin6">
              <div class="container22">
                <div class="container5">
                  <div class="text8">100%</div>
                </div>
                <div class="margin5">
                  <div class="container5">
                    <div class="custom-made">Custom made</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="link-cta">
          <div class="text9">READ OUR STORY</div>
          <img class="container23" src="container42.svg" />
        </div>
      </div>
    </div>
  </div>
  <div class="main-content">
    <div class="header-section">
      <div class="container24">
        <div class="heading-1-our-work">Our Work</div>
        <div class="horizontal-divider"></div>
      </div>
    </div>
    <div class="portfolio-grid">
      <div class="article-project-card-1">
        <img class="image" src="image0.png" />
        <div class="gradient"></div>
        <div class="badge">
          <div class="overlay-border-overlay-blur">
            <div class="text10">Full Interior</div>
          </div>
        </div>
        <div class="container19">
          <div class="horizontal-divider2"></div>
          <div class="heading-22">
            <div class="st-jude-s-basilica">St. Jude&#039;s Basilica</div>
          </div>
          <div class="container5">
            <div class="oxford-uk">Oxford, UK</div>
          </div>
        </div>
      </div>
      <div class="article-project-card-2">
        <img class="image" src="image1.png" />
        <div class="gradient"></div>
        <div class="badge2">
          <div class="overlay-border-overlay-blur">
            <div class="text10">Pews</div>
          </div>
        </div>
        <div class="container19">
          <div class="horizontal-divider2"></div>
          <div class="heading-22">
            <div class="cathedral-of-light">Cathedral of Light</div>
          </div>
          <div class="container5">
            <div class="vienna-austria">Vienna, Austria</div>
          </div>
        </div>
      </div>
      <div class="article-project-card-3">
        <img class="image" src="image2.png" />
        <div class="gradient"></div>
        <div class="badge">
          <div class="overlay-border-overlay-blur">
            <div class="text10">Altars</div>
          </div>
        </div>
        <div class="container19">
          <div class="horizontal-divider2"></div>
          <div class="heading-22">
            <div class="abbey-of-st-michel">Abbey of St. Michel</div>
          </div>
          <div class="container5">
            <div class="normandy-france">Normandy, France</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-cta">
      <div class="button">
        <div class="container25">
          <div class="view-all-our-projects">View All Our Projects</div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content-canvas">
    <div class="section-header">
      <div class="container17">
        <div class="text11">WHAT WE DO</div>
      </div>
      <div class="heading-2">
        <div class="text12">Our Craft</div>
      </div>
      <div class="container26">
        <div
          class="every-piece-handcrafted-for-sacred-spaces-we-blend-ancient-techniques-with-modern-precision-to-create-enduring-testaments-of-faith"
        >
          Every piece handcrafted for sacred spaces. We blend ancient techniques
          <br />
          with modern precision to create enduring testaments of faith.
        </div>
      </div>
      <div class="horizontal-divider"></div>
    </div>
    <div class="service-grid">
      <div class="article-card-1">
        <div class="margin7">
          <div class="background">
            <img class="container27" src="container53.svg" />
          </div>
        </div>
        <div class="heading-3-margin">
          <div class="heading-3">
            <div class="chapel-pews2">Chapel Pews</div>
          </div>
        </div>
        <div class="margin8">
          <div class="container28">
            <div
              class="custom-wooden-pew-seating-designed-for-comfort-and-reverence-crafted-from-solid-walnut-with-traditional-joinery"
            >
              Custom wooden pew
              <br />
              seating designed for
              <br />
              comfort and reverence.
              <br />
              Crafted from solid
              <br />
              walnut with traditional
              <br />
              joinery.
            </div>
          </div>
        </div>
        <div class="link2">
          <div class="text13">Learn more</div>
          <img class="container29" src="container55.svg" />
        </div>
      </div>
      <div class="article-card-2">
        <div class="margin7">
          <div class="background">
            <img class="container30" src="container56.svg" />
          </div>
        </div>
        <div class="heading-3-margin">
          <div class="heading-3">
            <div class="altar-furniture2">Altar Furniture</div>
          </div>
        </div>
        <div class="margin8">
          <div class="container31">
            <div
              class="handcrafted-altars-and-pulpits-that-honour-the-sacred-space-featuring-intricate-brass-detailing-and-stone-inlays"
            >
              Handcrafted altars and
              <br />
              pulpits that honour the
              <br />
              sacred space, featuring
              <br />
              intricate brass detailing
              <br />
              and stone inlays.
            </div>
          </div>
        </div>
        <div class="link2">
          <div class="text13">Learn more</div>
          <img class="container32" src="container58.svg" />
        </div>
      </div>
      <div class="article-card-3">
        <div class="margin7">
          <div class="background">
            <img class="container33" src="container59.svg" />
          </div>
        </div>
        <div class="heading-3-margin">
          <div class="heading-3">
            <div class="custom-woodwork2">
              Custom
              <br />
              Woodwork
            </div>
          </div>
        </div>
        <div class="margin8">
          <div class="container5">
            <div
              class="bespoke-furniture-pieces-built-to-your-exact-specifications-from-confessionals-to-intricately-carved-baptismal-fonts"
            >
              Bespoke furniture
              <br />
              pieces built to your
              <br />
              exact specifications.
              <br />
              From confessionals to
              <br />
              intricately carved
              <br />
              baptismal fonts.
            </div>
          </div>
        </div>
        <div class="link2">
          <div class="text13">Learn more</div>
          <img class="container34" src="container61.svg" />
        </div>
      </div>
      <div class="article-card-4">
        <div class="margin7">
          <div class="background">
            <img class="container35" src="container62.svg" />
          </div>
        </div>
        <div class="heading-3-margin">
          <div class="heading-3">
            <div class="chapel-interiors2">Chapel Interiors</div>
          </div>
        </div>
        <div class="margin8">
          <div class="container5">
            <div
              class="full-chapel-interior-design-guidance-from-concept-to-completion-ensuring-architectural-harmony-and-spiritual-resonance"
            >
              Full chapel interior
              <br />
              design guidance from
              <br />
              concept to completion,
              <br />
              ensuring architectural
              <br />
              harmony and spiritual
              <br />
              resonance.
            </div>
          </div>
        </div>
        <div class="link3">
          <div class="text13">Learn more</div>
          <img class="container36" src="container64.svg" />
        </div>
      </div>
    </div>
    <div class="section-footer-action">
      <div class="button2">
        <div class="text14">View All Services</div>
      </div>
    </div>
  </div>
  <div class="main-hero-section">
    <div class="left-panel-55">
      <div class="container37">
        <div class="heading-1-headline">
          <div class="crafting-sacred-spaces-one-piece-at-a-time">
            <span>
              <span class="crafting-sacred-spaces-one-piece-at-a-time-span">
                Crafting Sacred
                <br />
                Spaces,
                <br />
              </span>
              <span class="crafting-sacred-spaces-one-piece-at-a-time-span2">
                One Piece at a
                <br />
                Time.
              </span>
            </span>
          </div>
        </div>
        <div class="subtext2">
          <div
            class="bespoke-chapel-interiors-and-furniture-crafted-with-precision-purpose-and-timeless-craftsmanship"
          >
            Bespoke chapel interiors and furniture, crafted with precision,
            <br />
            purpose, and timeless craftsmanship.
          </div>
        </div>
        <div class="ct-as">
          <div class="link4">
            <div class="text15">View Our Work</div>
          </div>
          <div class="link5">
            <div class="start-enquiry">Start Enquiry</div>
          </div>
        </div>
        <div class="trust-badges">
          <div class="container4">
            <div class="_25-years-experience">25+ YEARS EXPERIENCE</div>
          </div>
          <div class="container4">
            <div class="text16">✦</div>
          </div>
          <div class="container4">
            <div class="_60-chapels-served">60+ CHAPELS SERVED</div>
          </div>
          <div class="container4">
            <div class="text16">✦</div>
          </div>
          <div class="container4">
            <div class="text17">100% CUSTOM DESIGNS</div>
          </div>
        </div>
      </div>
    </div>
    <img class="jjc-chapel-576-x-800-1" src="jjc-chapel-576-x-800-10.png" />
  </div>
  <div class="top-navigation-shared-component">
    <div class="container38">
      <div class="link6">
        <div class="text18">JJC</div>
      </div>
      <div class="desktop-navigation">
        <div class="link7">
          <div class="text19">Home</div>
        </div>
        <div class="link-margin">
          <div class="link-services">Services</div>
        </div>
        <div class="link-margin">
          <div class="link-portfolio">Portfolio</div>
        </div>
        <div class="link-margin">
          <div class="link-about">About</div>
        </div>
        <div class="link-margin">
          <div class="gallery">Gallery</div>
        </div>
        <div class="link-margin">
          <div class="link-faq">FAQ</div>
        </div>
      </div>
      <div class="link-action">
        <div class="enquire">ENQUIRE</div>
      </div>
    </div>
  </div>
</div>
"""

# Replace class=" with className="
jsx_content = html_content.replace('class="', 'className="')
jsx_content = jsx_content.replace('for="', 'htmlFor="')

# Escape inline styles if any (none exist in the snippet but good measure)
# Also fix any unescaped quotes if necessary. 
# It seems the HTML uses &#039; for single quotes which is valid in JSX.

output = f"""
import './Home.css';

export default function Home() {{
  return (
    {jsx_content.strip()}
  );
}}
"""

with open('src/pages/public/Home.jsx', 'w') as f:
    f.write(output)

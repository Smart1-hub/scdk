import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-24">

        <div className="max-w-5xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-widest">
            Contact Us
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Let’s Build Smarter Cities Together
          </h1>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-10 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-slate-300">

              <div>
                <p className="text-cyan-400 font-semibold">
                  Address
                </p>

                <p className="mt-2">
                  12, Olutunde OJO Way,
                  Off Bernard Bankole Street,
                  Basorun, Ibadan
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Email
                </p>

                <p className="mt-2">
                  scdk@yahoo.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Phone
                </p>

                <p className="mt-2">
                  +2349029661645
                </p>
              </div>

            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
              />

              <button
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}
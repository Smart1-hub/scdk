import {
  Bell,
  Search,
} from "lucide-react";

export default function Topbar() {

  return (

    <header
      className="
        h-24
        border-b
        border-slate-800
        bg-slate-950/80
        backdrop-blur-xl
        flex
        items-center
        justify-between
        px-10
      "
    >

      {/* SEARCH */}
      <div
        className="
          flex
          items-center
          gap-3
          bg-slate-900
          px-5
          py-3
          rounded-2xl
          w-[400px]
        "
      >

        <Search
          size={18}
          className="text-slate-500"
        />

        <input
          type="text"
          placeholder="Search platform..."
          className="
            bg-transparent
            outline-none
            w-full
            text-white
          "
        />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        <button
          className="
            relative
            w-12
            h-12
            rounded-2xl
            bg-slate-900
            flex
            items-center
            justify-center
          "
        >

          <Bell size={20} />

          <span
            className="
              absolute
              top-2
              right-2
              w-2
              h-2
              bg-cyan-400
              rounded-full
            "
          ></span>

        </button>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-cyan-500
            "
          ></div>

          <div>

            <h3 className="font-bold">

              Administrator

            </h3>

            <p className="text-slate-500 text-sm">

              Enterprise Control

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}
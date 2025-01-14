import Link from "next/link";

const If_You_Are_Still_Stuck_Text = () => {
  return (
    <>
      <p>
        If you’re still stuck after attempting the possible solutions above,
        consider finding the map guide video in the Mercy Parkour Code
        Spreadsheet{" "}
        <Link
          href="/codes"
          className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
        >
          (Mercy Parkour Codes)
        </Link>{" "}
        to see the intended solution or join the Mercy Parkour Discord{" "}
        <Link
          href="https://discord.com/invite/mercyparkour"
          className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
        >
          (Mercy Parkour Server)
        </Link>{" "}
        to ask for help.
      </p>
    </>
  );
};

export default If_You_Are_Still_Stuck_Text;

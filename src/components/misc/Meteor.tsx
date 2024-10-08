export default function Meteor() {
  const meteorData = [
    { left: "-258px", delay: "3.68s", duration: "5s" },
    { left: "384px", delay: "3.94s", duration: "6s" },
    { left: "-111px", delay: "0.90s", duration: "4s" },
    { left: "271px", delay: "2.37s", duration: "7s" },
    { left: "-50px", delay: "1.5s", duration: "4.5s" },
    { left: "200px", delay: "3.1s", duration: "6.8s" },
    { left: "-320px", delay: "2.9s", duration: "4.2s" },
    { left: "500px", delay: "4.2s", duration: "3.5s" },
    { left: "120px", delay: "2.0s", duration: "4s" },
    { left: "-400px", delay: "3.75s", duration: "5.9s" },
  ];
  return (
    <div>
      {meteorData.map((meteor, index) => (
        <span
          key={index}
          className="animate-meteor-effect fixed z-0 top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:top-1 before:content-[''] before:absolute before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r dark:before:from-white before:from-black before:to-transparent"
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        ></span>
      ))}
    </div>
  );
}

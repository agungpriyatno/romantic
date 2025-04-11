"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const start = new Date("2023-02-11T00:00:00");
      const gapSecond = Math.floor((now.getTime() - start.getTime()) / 1000);

      const averageSecondOnAYear = 60 * 60 * 24 * 365.25; // Mengakomodir tahun kabisat
      const averageSecondOnAMonth = 60 * 60 * 24 * (365.25 / 12);

      const year = Math.floor(gapSecond / averageSecondOnAYear);
      const sisaDetikSetelahTahun = gapSecond % averageSecondOnAYear;
      const month = Math.floor(sisaDetikSetelahTahun / averageSecondOnAMonth);
      const sisaDetikSetelahBulan =
        sisaDetikSetelahTahun % averageSecondOnAMonth;
      const day = Math.floor(sisaDetikSetelahBulan / (60 * 60 * 24));
      const hour = Math.floor(
        (sisaDetikSetelahBulan % (60 * 60 * 24)) / (60 * 60)
      );
      const minute = Math.floor((sisaDetikSetelahBulan % (60 * 60)) / 60);
      const second = sisaDetikSetelahBulan % 60;

      if (year > 0) setYear(year);
      if (month > 0) setMonth(month);
      if (day > 0) setDay(day);
      if (hour > 0) setHour(hour);
      if (minute > 0) setMinute(minute);
      if (second > 0) setSecond(second);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="container mx-auto h-screen overflow-y-auto relative">
      {/* <Button
        className=" fixed right-2 bottom-2 z-50"
        size={"icon"}
        onClick={playAudio}
      >
        <PlayIcon />
      </Button>
      <audio ref={audioRef} src="/audios/audio-1.weba" loop /> */}
      <div className="h-screen w-screen relative">
        <Image
          src={"/images/image-1.jpg"}
          alt="nextjs"
          fill
          className=" object-cover -z-10"
        />
        <div className="w-full h-screen flex flex-col justify-end place-items-center gap-4 px-4 pb-[25%]">
          <h1 className="text-4xl font-bold text-white">Happy Anniversary</h1>
          <p className="text-lg text-white text-center max-w-md">
            Happy anniversary, my love. Every year with you is the most precious
            gift in my life. Our love grows deeper and stronger, and Im grateful
            for every moment we share.
          </p>
          <Card className="px-4 py-2 bg-stone-800 border-stone-800">
            <h2 className="text-lg font-bold text-center text-primary">
              {year} Years, {month} Months, {day} Days
            </h2>
          </Card>
          <Card className="px-4 py-2 bg-stone-800 border-stone-800">
            <h2 className="text-sm font-bold text-primary">
              {hour} : {minute} : {second}
            </h2>
          </Card>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <Image
          src={"/images/image-2.jpg"}
          alt="nextjs"
          fill
          className=" object-cover -z-10"
        />
        <div className="w-full h-screen flex flex-col justify-end place-items-center gap-2 px-4 pb-[25%]">
          <p className="text-lg text-white text-center max-w-md">
            Our relationship isnt a fairytale, it has its disagreements and
            clashes. But the beauty lies in how we navigate those storms, always
            finding our own ways to show we care, even if its through a stubborn
            gesture or a quiet act of kindness.
          </p>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <Image
          src={"/images/image-4.jpg"}
          alt="nextjs"
          fill
          className=" object-cover -z-10"
        />
        <div className="w-full h-screen flex flex-col justify-end place-items-center gap-2 px-4 pb-[25%]">
          <p className="text-lg text-white text-center max-w-md">
            I know I can be annoying and put you in a bad mood sometimes, and
            for that, Im truly sorry. But please know that even when I mess up,
            my love for you is constant.
          </p>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <Image
          src={"/images/image-3.jpg"}
          alt="nextjs"
          fill
          className=" object-cover -z-10"
        />
        <div className="w-full h-screen flex flex-col justify-end place-items-center gap-2 px-4 pb-[25%]">
          <h1 className="text-4xl font-bold text-white">Thank You</h1>
          <p className="text-lg text-white text-center max-w-md">
            In every chapter of my life, the happy and the difficult, you have
            been my steadfast companion.<b>Thank you</b> for your unwavering
            love and support, always.
          </p>
          <p className="text-white italic">since 2023 ~</p>
        </div>
      </div>
      <ReactAudioPlayer
        src="/audios/audio-1.weba"
        autoPlay
        controls
        className="fixed bottom-2 right-2 -z-50"
      />
    </main>
  );
}

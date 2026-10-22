"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
    AcceptedLineGroupLink,
    AcceptedLineGroupQR,
    Missions,
} from "@/utils/information";
import { UserData } from "@/app/dashboard/page";
import { updateAnnouncementOpened } from "@/app/dashboard/actions";
import { CopyIcon, LinkIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const RegisteredDashboard = (userData: UserData) => {
    const [copyTooltip, setCopyTooltip] = useState("");
    const [linkTooltip, setLinkTooltip] = useState("");
    const [announcementDialogOpen, setAnnouncementDialogOpen] = useState(
        !userData.isAnnouncementOpened
    );
    const { toast } = useToast();

    const copyReferralCode = async () => {
        try {
            await navigator.clipboard.writeText(userData.code);
            toast({
                title: "Copied!",
                description: "Referral code copied to clipboard",
            });
        } catch (err) {
            console.error("Failed to copy referral code:", err);
            toast({
                title: "Failed to copy",
                description: "Please try again",
                variant: "destructive",
            });
        }
    };

    const copyShareableLink = async () => {
        const baseUrl =
            typeof window !== "undefined"
                ? window.location.origin
                : "https://bootcamp.exerciseftui.com";
        const shareableLink = `${baseUrl}/?referral=${userData.code}`;
        try {
            await navigator.clipboard.writeText(shareableLink);
            toast({
                title: "Copied!",
                description: "Shareable link copied to clipboard",
            });
        } catch (err) {
            console.error("Failed to copy shareable link:", err);
            toast({
                title: "Failed to copy",
                description: "Please try again",
                variant: "destructive",
            });
        }
    };

    return (
        <>
            <div className="w-full h-auto flex flex-col gap-12 p-4 lg:p-16 items-center pt-36 mb-20 relative overflow-hidden">
                <div className="bg-black/20 lg:mt-[100px] backdrop-blur-md w-full lg:w-3/4 border border-white/20 rounded-lg h-auto p-8 lg:p-12 flex flex-col justify-between">
                    {/* Top section with greeting, announcement status, and points */}
                    <div className="flex lg:flex-row flex-col justify-between items-start h-full lg:gap-0 gap-8">
                        <div className="flex flex-col justify-between w-full lg:w-1/2 h-full">
                            <div>
                                <h1 className="text-white text-4xl font-bold mb-1 truncate">
                                    Hi, {userData.firstName || "Nama"}!
                                </h1>
                                <div className="text-gray-300 text-xl">
                                    {userData.isAccepted ? (
                                        <p>
                                            Selamat! Kamu diterima di path{" "}
                                            <span className="font-bold text-white">
                                                {userData.selectedPath}
                                            </span>
                                            ! 🎉
                                        </p>
                                    ) : (
                                        <p className="text-white">
                                            Mohon maaf, kamu belum diterima di
                                            path {userData.selectedPath}, jangan
                                            patah semangat! Kamu masih bisa
                                            mendaftar sebagai staff tetap
                                            EXERCISE 2026.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-4">
                                <Dialog
                                    open={announcementDialogOpen}
                                    onOpenChange={setAnnouncementDialogOpen}
                                >
                                    <DialogTrigger asChild>
                                        <Button className="bg-red_1 w-fit hover:bg-red_3 hover:-translate-y-0.5 ease-in-out transform transition-all text-white font-semibold">
                                            Lihat Pengumuman
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="text-black max-md:w-[95%] max-md:rounded-lg max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold">
                                                {userData.isAccepted
                                                    ? "🎉 Congratulations!"
                                                    : "Thank You!"}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {userData.isAccepted
                                                    ? "Selamat bergabung di Profify Bootcamp 2026!"
                                                    : "Terima kasih atas minat kamu pada bootcamp kami."}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="py-2">
                                            {userData.isAccepted ? (
                                                <div className="flex flex-col gap-3 text-base">
                                                    <p>
                                                        Selamat! Kamu telah
                                                        diterima sebagai peserta
                                                        Prodify Bootcamp 2026 di
                                                        path{" "}
                                                        <span className="font-bold uppercase text-[#760022]">
                                                            {
                                                                userData.selectedPath
                                                            }
                                                        </span>
                                                        .
                                                    </p>
                                                    <p className="font-medium">
                                                        Segera join Line Group
                                                        peserta untuk informasi
                                                        lebih lanjut:
                                                    </p>
                                                    <p className="text-xs text-red-600 font-semibold">
                                                        *Ini adalah group baru,
                                                        berbeda dengan group
                                                        preliminary. WAJIB JOIN.
                                                    </p>

                                                    {/* Desktop: Show QR Code */}
                                                    <div className="hidden lg:flex flex-col items-center justify-center my-3">
                                                        <Image
                                                            alt="Line Group QR Code"
                                                            src={
                                                                AcceptedLineGroupQR
                                                            }
                                                            width={200}
                                                            height={200}
                                                            className="rounded-lg shadow-md border"
                                                        />
                                                        <p className="text-xs text-gray-500 mt-2">
                                                            Scan QR code di atas
                                                            menggunakan aplikasi
                                                            LINE
                                                        </p>
                                                    </div>

                                                    {/* Mobile: Show Button */}
                                                    <div className="block lg:hidden my-2">
                                                        <Button
                                                            className="bg-[#00C200] w-full hover:bg-[#00a800] hover:-translate-y-0.5 ease-in-out transform transition-all text-white font-bold flex items-center justify-center gap-2 py-3"
                                                            onClick={() => {
                                                                window.open(
                                                                    AcceptedLineGroupLink,
                                                                    "_blank"
                                                                );
                                                            }}
                                                        >
                                                            <Image
                                                                alt="line"
                                                                src="/lineIcon.svg"
                                                                width={28}
                                                                height={28}
                                                            />
                                                            Join Participants
                                                            Group
                                                        </Button>
                                                    </div>

                                                    <p className="text-sm text-gray-600 pt-2">
                                                        Sampai jumpa di Grand
                                                        Launching Prodify
                                                        Bootcamp 2026!
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-2 text-base">
                                                    <p>
                                                        Setelah pertimbangan
                                                        yang sangat ketat, kami
                                                        belum bisa menawarkan
                                                        kamu tempat di bootcamp
                                                        kali ini. Jangan berkecil
                                                        hati, tetap semangat dan
                                                        terus asah kemampuanmu!
                                                    </p>
                                                    <p className="pt-2 font-bold text-gray-800">
                                                        Ini bukanlah akhir, kami
                                                        tunggu di Open
                                                        Recruitment Staff
                                                        EXERCISE 2026!
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <DialogFooter>
                                            <Button
                                                onClick={async () => {
                                                    try {
                                                        await updateAnnouncementOpened();
                                                        setAnnouncementDialogOpen(
                                                            false
                                                        );
                                                    } catch (error) {
                                                        console.error(
                                                            "Error updating announcement:",
                                                            error
                                                        );
                                                        setAnnouncementDialogOpen(
                                                            false
                                                        );
                                                    }
                                                }}
                                                className="bg-red_1 hover:bg-red_3 text-white"
                                            >
                                                Tutup
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                {/* Direct access to the Line group on the dashboard card for accepted users */}
                                {userData.isAccepted && (
                                    <div className="mt-1">
                                        {/* Desktop: QR Code preview */}
                                        <div className="hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 w-fit">
                                            <Image
                                                alt="Line Group QR Code"
                                                src={AcceptedLineGroupQR}
                                                width={90}
                                                height={90}
                                                className="rounded shadow bg-white"
                                            />
                                            <div className="text-white text-sm">
                                                <p className="font-semibold text-base">
                                                    Grup LINE Peserta
                                                </p>
                                                <p className="text-xs text-gray-300">
                                                    Scan QR code untuk join grup
                                                </p>
                                            </div>
                                        </div>

                                        {/* Mobile: Join Line Button */}
                                        <div className="block lg:hidden">
                                            <Button
                                                className="bg-[#00C200] w-fit hover:bg-[#00a800] hover:-translate-y-0.5 ease-in-out transform transition-all text-white font-medium flex items-center gap-2"
                                                onClick={() => {
                                                    window.open(
                                                        AcceptedLineGroupLink,
                                                        "_blank"
                                                    );
                                                }}
                                            >
                                                <Image
                                                    alt="line"
                                                    src="/lineIcon.svg"
                                                    width={28}
                                                    height={28}
                                                />
                                                Join Group Line Peserta
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="text-right flex flex-col justify-between h-full self-end">
                            <div>
                                <span className="text-[#ff6e98] text-6xl font-bold">
                                    {userData.points}
                                </span>
                                <span className="text-white text-3xl ml-1">
                                    Points
                                </span>
                            </div>
                            <div className="text-white">
                                <p className="text-xl">Referral Code</p>
                                <div className="flex h-10 gap-1">
                                    <div className="bg-white rounded-md text-black w-fit p-1 px-4 font-bold text-2xl">
                                        {userData.code}
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={copyReferralCode}
                                            onMouseEnter={() =>
                                                setCopyTooltip("visible")
                                            }
                                            onMouseLeave={() =>
                                                setCopyTooltip("")
                                            }
                                            className="bg-red_3 rounded-md h-full w-12 flex items-center justify-center hover:bg-red_2 transition-colors"
                                        >
                                            <CopyIcon size={20} />
                                        </button>
                                        {copyTooltip && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-sm rounded whitespace-nowrap z-10">
                                                Copy code
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={copyShareableLink}
                                            onMouseEnter={() =>
                                                setLinkTooltip("visible")
                                            }
                                            onMouseLeave={() =>
                                                setLinkTooltip("")
                                            }
                                            className="bg-red_3-800 rounded-md h-full w-12 flex items-center justify-center hover:bg-red_3 transition-colors"
                                        >
                                            <LinkIcon size={20} />
                                        </button>
                                        {linkTooltip && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-sm rounded whitespace-nowrap z-10">
                                                Copy shareable link
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full h-full absolute top-0 left-0 z-[-1]"
                    style={{
                        background:
                            "linear-gradient(119.97deg, #10152C 7.46%, #59001a 44.79%, #121212 85.66%)",
                    }}
                ></div>
                <div
                    className="bg-white w-full aspect-square absolute bottom-0 z-[-1]"
                    style={{
                        clipPath: "ellipse(50% 9% at 50% 100%)",
                    }}
                ></div>
            </div>

            <div className="w-full h-auto flex flex-col max-w-4xl mx-auto mb-20 lg:p-0 p-4">
                <h2 className="text-4xl font-bold text-black pb-4">Missions</h2>
                <div className="flex flex-col gap-2">
                    {Missions.map(mission => {
                        const isCompleted =
                            userData.completedMissions?.includes(
                                mission.action_name || ""
                            ) && mission.action_name !== "referral_success";
                        return (
                            <div
                                key={mission.title}
                                className={`w-full flex cursor-default justify-between rounded-md items-center bg-[#11162F] px-4 py-2 ${isCompleted
                                        ? "opacity-40 cursor-not-allowed"
                                        : ""
                                    }`}
                            >
                                <h3 className="text-lg lg:text-3xl text-white">
                                    {mission.title}
                                </h3>
                                <p className="text-[#ff6e98] text-lg lg:text-3xl">
                                    {mission.points && mission.points > 0
                                        ? `${mission.points} Points`
                                        : ""}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

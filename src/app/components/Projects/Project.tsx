import { getData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

const Project = async () => {
    const data = (await getData()) as Array<any>;
    console.log(data);
    return (
        <div className="space-y-5 pt-12" id="project">
            {data.map((site) => {
                return (
                    site.screenshot_url && (
                        <Link
                            href={site.deploy_url}
                            key={site?.id}
                            target="_blank"
                            className="flex p-5 px-10 hover:bg-[#17274B] rounded-md justify-between gap-8 items-start"
                        >
                            <div className="">
                                <Image
                                    className="object-cover w-32 m-0 rounded ring-2"
                                    src={site.screenshot_url}
                                    alt={site.name}
                                />
                            </div>
                            <div className="w-[80%]">
                                <h1 className="text-lg text-slate-400 capitalize font-semibold">
                                    {site.name}
                                </h1>
                            </div>
                        </Link>
                    )
                );
            })}
        </div>
    );
};

export default Project;

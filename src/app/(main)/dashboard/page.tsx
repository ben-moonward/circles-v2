import Card from "@/components/common/card";
import PageWrapper from "@/components/layout/page-wrapper";
import HomeContent from "@/features/home/home-content";

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <Card title="Members" className={"basis-1/2"}>
                        <div className="con">content</div>
                    </Card>
                    <Card title="Notes Feed">
                        <div className="con">content</div>
                    </Card>
                </div>
                <div className="flex flex-col gap-4">
                    <Card title="Upcoming Events">
                        <div className="con">content</div>
                    </Card>
                </div>
            </div>
        </>
    );
}

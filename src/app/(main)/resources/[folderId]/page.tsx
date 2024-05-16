import Card from "@/components/common/card";

export default function Page({ params }: { params: { folderId: string } }) {
    return (
        <Card title={params.folderId}>
            <div className="con">content</div>
        </Card>
    );
}

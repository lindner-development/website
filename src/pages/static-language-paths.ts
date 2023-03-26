
export async function getStaticPaths() {
    return [
        {
            params: {
                language: "de",
            },
        },
        {
            params: {
                language: "en",
            },
        },
    ];
}
export function getStaticPaths() {
    return [
        { params: { language: 'en' } },
        { params: { language: 'de' } },
    ]
}
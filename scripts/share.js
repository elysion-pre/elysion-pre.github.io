function createMisskeyShareLink(jsonUrl, text) {
    const domain = document.getElementById('domainInput').value;
    if (!domain) {
        alert('ドメインを入力してください');
        return;
    }

    const encodedDomain = encodeURIComponent(domain);
    const encodedJsonUrl = encodeURIComponent(jsonUrl);
    const hash = encodeURIComponent(text); // テキストをハッシュ化するなどして適切な形式に変換する必要があります

    const installUrl = `https://${encodedDomain}/install-extensions?url=${encodedJsonUrl}&hash=${hash}`;

    const shareLinkDiv = document.getElementById('shareLink');
    shareLinkDiv.innerHTML = `
        <p>Misskey共有リンク:</p>
        <a href="${installUrl}" target="_blank">Misskeyで共有</a>
    `;
}

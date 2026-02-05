function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

async function postData(url = '', data = {}) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.error('Fetch error:', err);
        return { error: 'Network error' };
    }
}

// Generate + Clear functions
async function generateContent() {
    const data = await postData('/generate_content', {
        product: document.getElementById("product").value,
        audience: document.getElementById("audience").value,
        tone: document.getElementById("tone").value
    });
    document.getElementById("contentOutput").value = data.content || data.error || "No content generated";
}

async function generateSEO() {
    const data = await postData('/generate_keywords', {
        product: document.getElementById("seoInput").value
    });
    document.getElementById("seoOutput").value = data.keywords || data.error || "No keywords generated";
}

async function generateHashtag() {
    const data = await postData('/generate_hashtags', {
        topic: document.getElementById("hashtagInput").value
    });
    document.getElementById("hashtagOutput").value = data.hashtags || data.error || "No hashtags generated";
}

async function optimizeContent() {
    const data = await postData('/optimize_content', {
        content: document.getElementById("optimizerInput").value
    });
    document.getElementById("optimizerOutput").value = data.optimized_content || data.error || "No optimization result";
}

async function geoOptimize() {
    const data = await postData('/geo_optimize', {
        content: document.getElementById("geoInput").value
    });
    document.getElementById("geoOutput").value = data.geo_content || data.error || "No GEO optimized content";
}

// Clear buttons
function clearContent() { document.getElementById("product").value=""; document.getElementById("audience").value=""; document.getElementById("tone").selectedIndex=0; document.getElementById("contentOutput").value=""; }
function clearSEO() { document.getElementById("seoInput").value=""; document.getElementById("seoOutput").value=""; }
function clearHashtag() { document.getElementById("hashtagInput").value=""; document.getElementById("hashtagOutput").value=""; }
function clearOptimizer() { document.getElementById("optimizerInput").value=""; document.getElementById("optimizerOutput").value=""; }
function clearGeo() { document.getElementById("geoInput").value=""; document.getElementById("geoOutput").value=""; }

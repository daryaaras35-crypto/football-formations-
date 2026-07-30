// شوێنی یاریزانەکان لەسەر یارگا بە ڕێژەی سەدی (%)
const formations = {
    '433': [
        { id: 'p1', bottom: '5%', left: '50%', role: 'GK' },
        { id: 'p2', bottom: '20%', left: '15%', role: 'LB' },
        { id: 'p3', bottom: '18%', left: '38%', role: 'CB' },
        { id: 'p4', bottom: '18%', left: '62%', role: 'CB' },
        { id: 'p5', bottom: '20%', left: '85%', role: 'RB' },
        { id: 'p6', bottom: '40%', left: '30%', role: 'CM' },
        { id: 'p7', bottom: '38%', left: '50%', role: 'DM' },
        { id: 'p8', bottom: '40%', left: '70%', role: 'CM' },
        { id: 'p9', bottom: '75%', left: '20%', role: 'LW' },
        { id: 'p10', bottom: '82%', left: '50%', role: 'ST' },
        { id: 'p11', bottom: '75%', left: '80%', role: 'RW' }
    ],
    '4231': [
        { id: 'p1', bottom: '5%', left: '50%', role: 'GK' },
        { id: 'p2', bottom: '20%', left: '15%', role: 'LB' },
        { id: 'p3', bottom: '18%', left: '38%', role: 'CB' },
        { id: 'p4', bottom: '18%', left: '62%', role: 'CB' },
        { id: 'p5', bottom: '20%', left: '85%', role: 'RB' },
        { id: 'p6', bottom: '35%', left: '35%', role: 'DMF' },
        { id: 'p7', bottom: '35%', left: '65%', role: 'DMF' },
        { id: 'p8', bottom: '58%', left: '50%', role: 'AMF' },
        { id: 'p9', bottom: '60%', left: '20%', role: 'LMF' },
        { id: 'p10', bottom: '82%', left: '50%', role: 'CF' },
        { id: 'p11', bottom: '60%', left: '80%', role: 'RMF' }
    ],
    '352': [
        { id: 'p1', bottom: '5%', left: '50%', role: 'GK' },
        { id: 'p2', bottom: '18%', left: '25%', role: 'CB' },
        { id: 'p3', bottom: '16%', left: '50%', role: 'CB' },
        { id: 'p4', bottom: '18%', left: '75%', role: 'CB' },
        { id: 'p5', bottom: '45%', left: '10%', role: 'LMF' },
        { id: 'p6', bottom: '38%', left: '35%', role: 'CM' },
        { id: 'p7', bottom: '35%', left: '50%', role: 'DM' },
        { id: 'p8', bottom: '38%', left: '65%', role: 'CM' },
        { id: 'p9', bottom: '45%', left: '90%', role: 'RMF' },
        { id: 'p10', bottom: '78%', left: '38%', role: 'CF' },
        { id: 'p11', bottom: '78%', left: '62%', role: 'CF' }
    ]
};

function setFormation(type) {
    const coords = formations[type];
    coords.forEach(p => {
        const el = document.getElementById(p.id);
        if (el) {
            el.style.bottom = p.bottom;
            el.style.left = p.left;
            el.querySelector('span').innerText = p.role;
        }
    });
}

// بەشێوەی ئۆتۆماتیکی تەشکیلەی 4-3-3 پێشان بدە لە سەرەتادا
window.onload = () => setFormation('433');

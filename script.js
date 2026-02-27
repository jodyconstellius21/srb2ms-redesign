const activeServers = [
    { 
        ip: '45.76.132.89:5029', 
        name: 'Chaos Emerald Hunt', 
        version: '2.2.13', 
        players: '8/16', 
        gametype: 'Co-op', 
        ping: 25,
        currentMap: 'GREEN FLOWER ZONE 1',
        playerList: ['SonicSpeed92', 'TailsFan2000', 'KnucklesWarrior', 'AmyTheHedgehog', 'ShadowEdge', 'RougeTheBat', 'OmegaRobot', 'BlazeTheKitten'],
        mods: {
            scripts: ['L_HUDEnhance-v2.1.lua', 'L_AutoSave-v1.5.lua'],
            maps: ['M_CustomStages-v3.2.pk3', 'M_AzureTemple-v1.0.wad'],
            misc: ['S_CharVoices-v2.0.pk3', 'G_HDTextures-v1.8.pk3']
        }
    },
    { 
        ip: '104.238.155.42:5029', 
        name: 'Speed Highway Zone', 
        version: '2.2.13', 
        players: '12/32', 
        gametype: 'Match', 
        ping: 45,
        currentMap: 'TECHNO HILL ZONE 2',
        playerList: ['xX_ProGamer_Xx', 'MatchMaster2024', 'CompetitiveSonic', 'ElitePlayer', 'SRB2Champion', 'SpeedDemon777', 'BlueBlur88', 'FastFingers', 'QuickReflexes', 'AgileHedgehog', 'TurboMode', 'VelocityKing'],
        mods: {
            scripts: ['L_MatchModePlus-v1.3.lua'],
            maps: ['M_CompMaps-v3.0.pk3'],
            misc: ['S_AnnouncerPack-v1.1.pk3']
        }
    },
    { 
        ip: '207.148.94.201:5029', 
        name: 'Casual Hangout Server', 
        version: '2.2.12', 
        players: '3/12', 
        gametype: 'Co-op', 
        ping: 18,
        currentMap: 'ARID CANYON ZONE 1',
        playerList: ['ChillVibes', 'CasualGamer123', 'RelaxedPlayer'],
        mods: {
            scripts: ['L_ChatCommands-v2.4.lua'],
            maps: [],
            misc: ['MU_CustomMusic-v5.2.pk3']
        }
    },
    { 
        ip: '138.68.245.77:5029', 
        name: 'CTF Champions Arena', 
        version: '2.2.13', 
        players: '16/16', 
        gametype: 'CTF', 
        ping: 92,
        currentMap: 'JADE VALLEY ZONE',
        playerList: ['RedCaptain', 'RedDefender1', 'RedStriker', 'RedSupport', 'RedScout', 'RedGuardian', 'RedSniper', 'RedMedic', 'BlueCaptain', 'BlueDefender1', 'BlueStriker', 'BlueSupport', 'BlueScout', 'BlueGuardian', 'BlueSniper', 'BlueMedic'],
        mods: {
            scripts: ['L_CTFUtils-v3.1.lua', 'L_TeamChat-v1.0.lua'],
            maps: ['M_CTFPack2024-v2.5.pk3'],
            misc: ['C_TeamSkins-v1.2.wad']
        }
    },
    { 
        ip: '159.203.88.156:5029', 
        name: 'Sonic Adventure DX', 
        version: '2.2.13', 
        players: '5/24', 
        gametype: 'Race', 
        ping: 35,
        currentMap: 'SPEED HIGHWAY',
        playerList: ['Speedrunner_Pro', 'FastLapKing', 'RacingLegend', 'TimeTrialist', 'RecordBreaker'],
        mods: {
            scripts: ['L_TimeAttackPlus-v2.0.lua'],
            maps: ['M_SADXLevels-v1.4.pk3'],
            misc: ['G_SpeedrunTimer-v1.7.lua']
        }
    },
    { 
        ip: '68.183.120.34:5029', 
        name: 'Newbie Friendly Zone', 
        version: '2.2.11', 
        players: '7/16', 
        gametype: 'Co-op', 
        ping: 28,
        currentMap: 'GREEN FLOWER ZONE 2',
        playerList: ['NewPlayer2024', 'FirstTimer', 'JustStarted', 'HelpfulVeteran', 'FriendlyGuide', 'LearningTheRopes', 'Beginner101'],
        mods: {
            scripts: [],
            maps: [],
            misc: ['L_BeginnerTips-v1.0.lua']
        }
    },
];

const serverLog = [
    { ip: '167.99.142.88:5029', name: 'Midnight Mayhem', version: '2.2.13', lastSeen: '2024-02-27 03:45 UTC' },
    { ip: '178.128.91.203:5029', name: 'Throwback Thursday', version: '2.2.12', lastSeen: '2024-02-27 01:22 UTC' },
    { ip: '64.225.77.145:5029', name: 'Boss Rush Challenge', version: '2.2.13', lastSeen: '2024-02-26 23:15 UTC' },
    { ip: '95.179.234.112:5029', name: 'European Evening Hangout', version: '2.2.13', lastSeen: '2024-02-26 21:30 UTC' },
    { ip: '139.180.155.67:5029', name: 'Asian Pacific Zone', version: '2.2.12', lastSeen: '2024-02-26 19:05 UTC' },
];

function getPingClass(ping) {
    if (ping < 50) return 'good';
    if (ping < 100) return 'medium';
    return 'bad';
}

function isServerFull(players) {
    const [current, max] = players.split('/').map(Number);
    return current >= max;
}

function openServerInfo(serverIndex) {
    const server = activeServers[serverIndex];
    const content = document.getElementById('serverInfoContent');
    
    const scriptsHTML = server.mods.scripts.length > 0 
        ? server.mods.scripts.map(mod => `<div class="mod-item">${mod}</div>`).join('')
        : '<div class="mod-item"><span class="mod-item-file">No scripts loaded</span></div>';
    
    const mapsHTML = server.mods.maps.length > 0
        ? server.mods.maps.map(mod => `<div class="mod-item">${mod}</div>`).join('')
        : '<div class="mod-item"><span class="mod-item-file">No custom maps loaded</span></div>';
    
    const miscHTML = server.mods.misc.length > 0
        ? server.mods.misc.map(mod => `<div class="mod-item">${mod}</div>`).join('')
        : '<div class="mod-item"><span class="mod-item-file">No misc mods loaded</span></div>';
    
    content.innerHTML = `
        <div class="server-info-header">
            <h4>${server.name}</h4>
            <div class="server-info-detail">
                <strong>Dedicated server</strong> ${server.ip}<br>
                <strong>${server.gametype}</strong> - ${server.players} players<br>
                Playing on <strong>${server.currentMap}</strong>
            </div>
        </div>
        
        <div class="server-section">
            <h5>Players in Server</h5>
            <div class="player-list">
                ${server.playerList.join(', ')}
            </div>
        </div>
        
        <div class="server-section">
            <h5>Mods Loaded</h5>
            
            <div class="mod-category">
                <h6>Scripts</h6>
                <div class="mod-list">
                    ${scriptsHTML}
                </div>
            </div>
            
            <div class="mod-category">
                <h6>Maps</h6>
                <div class="mod-list">
                    ${mapsHTML}
                </div>
            </div>
            
            <div class="mod-category">
                <h6>Misc</h6>
                <div class="mod-list">
                    ${miscHTML}
                </div>
            </div>
        </div>
    `;
    
    openModal('serverInfoModal');
}

function populateActiveServers() {
    const tbody = document.getElementById('activeServersBody');
    tbody.innerHTML = '';

    activeServers.forEach((server, index) => {
        const row = document.createElement('tr');
        const fullClass = isServerFull(server.players) ? 'full' : '';
        
        row.innerHTML = `
            <td><button class="view-btn" onclick="openServerInfo(${index})">View</button></td>
            <td class="ip-address">${server.ip}</td>
            <td class="server-name">${server.name}</td>
            <td class="version">${server.version}</td>
            <td class="players ${fullClass}">${server.players}</td>
            <td>${server.gametype}</td>
            <td class="ping ${getPingClass(server.ping)}">${server.ping}ms</td>
        `;
        tbody.appendChild(row);
    });
    // Update stats
    updateServerStats();
}

function updateServerStats() {
    let totalPlayers = 0;
    activeServers.forEach(server => {
        const [current] = server.players.split('/').map(Number);
        totalPlayers += current;
    });
    const statsElement = document.getElementById('serverStats');
    statsElement.innerHTML = `<strong>${totalPlayers}</strong> players on <strong>${activeServers.length}</strong> servers`;
}

function populateServerLog() {
    const tbody = document.getElementById('serverLogBody');
    tbody.innerHTML = '';

    serverLog.forEach(server => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="ip-address">${server.ip}</td>
            <td class="server-name">${server.name}</td>
            <td class="version">${server.version}</td>
            <td class="last-seen">${server.lastSeen}</td>
        `;
        tbody.appendChild(row);
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function closeModalOnOutsideClick(event, modalId) {
    if (event.target.classList.contains('modal')) {
        closeModal(modalId);
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = 'auto';
    }
});

// Initialize tables on page load
document.addEventListener('DOMContentLoaded', () => {
    populateActiveServers();
    populateServerLog();
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme, false);

    const darkBtn = document.getElementById('darkMode');
    const lightBtn = document.getElementById('lightMode');

    darkBtn.addEventListener('click', () => setTheme('dark'));
    lightBtn.addEventListener('click', () => setTheme('light'));
});

// Theme toggle functionality
function setTheme(theme, save = true) {
    const html = document.documentElement;
    const darkBtn = document.getElementById('darkMode');
    const lightBtn = document.getElementById('lightMode');

    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        darkBtn.classList.remove('active');
        lightBtn.classList.add('active');
    } else {
        html.removeAttribute('data-theme');
        darkBtn.classList.add('active');
        lightBtn.classList.remove('active');
    }

    if (save) {
        localStorage.setItem('theme', theme);
    }
}
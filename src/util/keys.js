//very much not stolen from colon https://gdcolon.com/gdsave/keys.js

const orbAmounts = [0, 0, 50, 75, 125, 175, 225, 275, 350, 425, 500]
const demonTypes = ['Unknown', 'Hard', 'Unknown', 'Easy', 'Medium', 'Insane', 'Extreme']
const starDifficulties = ['Unrated', 'Auto', 'Easy', 'Normal', 'Hard', 'Hard', 'Harder', 'Harder', 'Insane', 'Insane', 'Demon'] 
const ratingColors = {'Official': 'cyan', 'Epic': '#ff8000', 'Featured': 'yellow', 'Starred': '#ffffbb', 'Rated': '#ffffbb', 'Unrated': 'white', 'Unavailable': 'gray'}
const typeColors = {'Daily': '#ff8000', 'Weekly': '#da0000', 'Gauntlet': 'salmon', 'Official': 'cyan', 'Online': 'lime'}


const keys = {
    'GS_value': 'stats',
    'GS_completed': 'completedLevels',

    'GS_3': 'userCoins',
    'GS_4': 'bronzeUserCoins',
    'GS_5': 'mapPackStars',
    'GS_6': 'shopPurchases',
    'GS_7': 'levelProgress',

    'GS_9': 'levelStars',
    'GS_10': 'officialLevelProgress',
    'GS_11': 'dailyRewards',
    'GS_12': 'quests',

    'GS_14': 'questRewards',
    'GS_15': 'queuedQuests',
    'GS_16': 'dailyProgress',
    'GS_17': 'dailyStars',
    'GS_18': 'gauntletProgress',
    'GS_19': 'treasureRoomRewards',
    'GS_20': 'totalDemonKeys',
    'GS_21': 'rewards',
    'GS_22': 'gdWorldRewards',
    'GS_23': 'gauntletProgress2',
    'GS_24': 'dailyProgress2',
    'GS_25': 'weeklyRewards',

    'GS_27': 'completedLists',

    'GLM_01': 'officialLevels',
    'GLM_02': 'uploadedLevels',
    'GLM_03': 'onlineLevels',
    'GLM_04': 'starredLevels',

    'GLM_06': 'followedAccounts',
    'GLM_07': 'recentlyPlayed',
    'GLM_08': 'enabledSearchFilters',
    'GLM_09': 'availableSearchFilters',
    'GLM_10': 'timelyLevels',
    'GLM_11': 'dailyID',
    'GLM_12': 'likes',
    'GLM_13': 'ratedLevels',
    'GLM_14': 'reportedLevels',
    'GLM_15': 'ratedDemons',
    'GLM_16': 'gauntlets',
    'GLM_17': 'weeklyID',
    'GLM_18': 'levelFolders',
    'GLM_19': 'createdLevelFolders',
    'GLM_20': 'smartTemplates',

    'GJA_001': 'username',
    'GJA_002': 'password',
    'GJA_003': 'accountID',
    'GJA_004': 'sessionID',
    'GJA_005': 'newPassword',

    'LLM_01': 'localLevels',
    'LLM_02': 'binaryVersion',
    'LLM_03': 'localLists',

    'MDLM_001': 'songInfo',
    'MDLM_002': 'songPriority',

    'KBM_001': 'keybinds',
    'KBM_002': 'keybinds2',

    'texQuality': 'textureQuality',
    'customObjectDict': 'customObjects',
    'playerUserID': 'playerID',
    'reportedAchievements': 'achievements',
    'secretNumber': 'cod3breakerSolution',
    'clickedGarage': 'clickedIconKit',
    'hasRP': 'isMod'
}


const kcekKeys = {
    4: 'level',
    6: 'song',
    7: 'quest',
    8: 'reward',
    9: 'rewardData',
    10: 'smartTemplate',
    11: 'smartTemplatePattern',
    12: 'levelList'
}


const statKeys = {
    1: 'jumps',
    2: 'attempts',
    3: 'officialLevelsCompleted',
    4: 'onlineLevelsCompleted',
    5: 'demons',
    6: 'stars',
    7: 'mapPacks',
    8: 'coins',
    9: 'destroyedPlayers',
    10: 'likedLevels',
    11: 'ratedLevels',
    12: 'userCoins',
    13: 'diamonds',
    14: 'orbs',
    15: 'completedDailies',
    16: 'fireShards',
    17: 'iceShards',
    18: 'poisonShards',
    19: 'shadowShards',
    20: 'lavaShards',
    21: 'demonKeys',
    22: 'totalOrbs',
    23: 'earthShards',
    24: 'bloodShards',
    25: 'metalShards',
    26: 'lightShards',
    27: 'soulShards',
    28: 'moons',
    29: 'spendableDiamonds',
    30: 'firePath',
    31: 'icePath',
    32: 'poisonPath',
    33: 'shadowPath',
    34: 'lavaPath',
    35: 'earthPath',
    36: 'bloodPath',
    37: 'metalPath',
    38: 'lightPath',
    39: 'soulPath',
    40: 'gauntlets',
    41: 'listRewards'
}


const questKeys = {
    1: { name: 'itemType', arr: { 1: 'orbs', 2: 'coins', 3: 'stars' } },
    2: 'obtainedItems',
    3: 'requiredItems',
    4: 'diamonds',
    5: 'timeLeft',
    6: 'active',
    7: 'name',
    8: 'tier'
}


const songKeys = {
    1: 'id',
    2: 'name',
    3: 'artistID',
    4: 'artist',
    5: 'size',
    6: 'youtubeID',
    7: 'youtubeChannel',
    8: 'scouted',
    9: 'priority',
    10: 'url'
}


const chestKeys = {
    1: 'id',
    2: { name: 'chest', arr: { 1: 'small', 2: 'large', 3: '1key', 4: '5key', 5: '10key', 6: '25key', 7: '50key', 8: '100key' } },
    3: 'rewards'
}


const rewardKeys = {
    1: { name: 'item', arr: { 1: 'Fire Shard', 2: 'Ice Shard', 3: 'Poison Shard', 4: 'Shadow Shard', 5: 'Lava Shard', 6: 'Demon Key', 7: 'Mana Orbs', 8: 'Diamonds', 9: 'Icon', 10: 'Earth Shard', 11: 'Blood Shard', 12: 'Metal Shard', 13: 'Light Shard', 14: 'Soul Shard' } },
    2: 'iconID',
    3: 'amount',
    4: { name: 'iconForm', arr: { 1: 'cube', 2: 'color1', 3: 'color2', 4: 'ship', 5: 'ball', 6: 'ufo', 7: 'wave', 8: 'robot', 9: 'spider', 10: 'trail', 11: 'deathEffect' } }
}


const listKeys = {
    'k2': 'name',

    'k5': 'author',

    'k96': 'orderedLevelIds',
    'k97': 'levels'
}


const levelKeys = {
    'k1': 'id',
    'k2': 'name',
    'k3': { name: 'description', b64: true },
    'k4': 'levelData',
    'k5': 'author',
    'k6': 'playerID',
    'k7': { name: 'difficulty', arr: { 1: 'Easy', 2: 'Normal', 3: 'Hard', 4: 'Harder', 5: 'Insane', 6: 'Demon' } },
    'k8': 'officialSongID',
    'k9': 'ratingScore1',
    'k10': 'ratingScore2',
    'k11': 'downloads',
    'k12': 'completions',
    'k13': 'editable',
    'k14': 'verified',
    'k15': 'uploaded',
    'k16': 'version',
    'k17': 'gameVersion',
    'k18': 'attempts',
    'k19': 'percentage',
    'k20': 'practicePercentage',
    'k21': { name: 'levelType', arr: { 1: 'official', 2: 'local', 3: 'saved', 4: 'online' } },
    'k22': 'likes',
    'k23': { name: 'length', arr: ['Tiny', 'Short', 'Medium', 'Long', 'XL', 'Platformer'] },
    'k24': 'dislikes',
    'k25': 'demon',
    'k26': 'stars',
    'k27': 'featuredPosition',
    
    'k33': 'auto',
    'k34': 'replayData', // it looks like b64 (most of the time) but decodes to nonsense idkk wtf is this
    'k35': 'playable',
    'k36': 'jumps',
    'k37': 'secretCoinsToUnlock',
    'k38': 'levelUnlocked',
    
    'k41': 'password',
    'k42': 'copiedID',
    'k43': 'twoPlayer',
    
    'k45': 'customSongID',
    'k46': 'revision',
    'k47': 'edited',
    'k48': 'objects',
    
    'k50': 'binaryVersion',
    
    'k60': 'accountID',
    'k61': 'firstCoinCollected',
    'k62': 'secondCoinCollected',
    'k63': 'thirdCoinCollected',
    'k64': 'totalCoins',
    'k65': 'verifiedCoins',
    'k66': 'requestedStars',
    'k67': 'extraString',
    'k68': 'antiCheatTriggered',
    'k69': 'large',
    
    'k71': 'manaOrbPercentage',
    'k72': 'ldm',
    'k73': 'ldmEnabled',
    'k74': 'timelyID',
    'k75': 'epic',
    'k76': 'demonType',
    'k77': 'isGauntlet',
    'k78': 'isGauntlet2',
    'k79': 'unlisted',
    'k80': 'editorTime',
    'k81': 'totalEditorTime',
    'k82': 'favorited',
    'k83': 'savedLevelIndex',
    'k84': 'folder',
    'k85': 'clicks',
    'k86': 'bestAttemptTime',
    'k87': 'seed',
    'k88': 'scores',
    'k89': 'leaderboardValid',
    'k90': 'leaderboardPercentage',
    
    'k95': 'lengthInFrames',

    'k102': 'bugPosX',
    'k103': 'bugPosYMaybe',

    'kI1': 'editorCameraX',
    'kI2': 'editorCameraY',
    'kI3': 'editorCameraZoom',
    'kI4': 'editorBuildTabPage',
    'kI5': 'editorBuildTabCategory',
    'kI6': 'editorRecentPages',
    'kI7': 'editorLayer'
}


const levelColorIds = {
    1000: 'background',
    1001: 'ground',
    1002: 'line',
    1003: '3dl',
    1004: 'obj',
    1005: 'playerPrimary',
    1006: 'playerSecondary',
    1007: 'lightbackground',

    1009: 'ground2',
    1010: 'black',
    
    1013: 'middleground',
    1014: 'middleground2'
}


const levelColorKeys = {
    1: 'r',
    2: 'g',
    3: 'b',
    4: { name: 'playerColor', arr: { '-1': 'none', '0': 'none', '1': 'primary', '2': 'secondary' } },
    5: 'blending',
    6: 'id',
    7: 'opacity',

    9: 'copyChannelId',
    10: 'colorHSV',
    11: 'r2',
    12: 'g2',
    13: 'b2',

    17: 'copyOpacity'
}


const levelHeaderKeys = {
    'kA1': 'audioTrack',
    'kA2': { name: 'gamemode', arr: ['cube', 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider', 'swing'] },
    'kA3': { name: 'miniMode', arr: [false, true] },
    'kA4': { name: 'speed', arr: ['1x', '0.5x', '2x', '3x', '4x'] },

    'kA6': { name: 'background', enforce: BigInt },
    'kA7': { name: 'ground', enforce: BigInt },
    'kA8': { name: 'dualMode', arr: [false, true] },
    'kA9': { name: 'useStartPos', arr: [false, true] },
    'kA10': { name: 'twoPlayerMode', arr: [false, true] },
    'kA11': { name: 'flippedGravity', arr: [false, true] },

    'kA13': { name: 'musicOffset', enforce: Number },
    'kA14': 'guidelines',
    'kA15': { name: 'fadeIn', arr: [false, true] },
    'kA16': { name: 'fadeOut', arr: [false, true] },
    'kA17': { name: 'groundLine', enforce: BigInt },
    'kA18': { name: 'font', enforce: BigInt },

    'kA20': { name: 'reverseGameplay', arr: [false, true] },

    'kA22': { name: 'isPlatformer', arr: [false, true] },

    'kA25': { name: 'middleground', enforce: BigInt },

    'kA27': { name: 'multiRotation', arr: [false, true] },
    'kA28': { name: 'mirrorMode', arr: [false, true] },
    'kA29': { name: 'rotateGameplay', arr: [false, true] },

    'kA31': { name: 'playerSqueeze', arr: [false, true] },
    'kA32': { name: 'fixGravity', arr: [false, true] },
    'kA33': { name: 'fixScale', arr: [false, true] },
    'kA34': { name: 'fixRobot', arr: [false, true] },

    'kA36': { name: 'spawnGroup', enforce: BigInt },
    'kA37': { name: 'dynamicHeight', arr: [false, true] },
    'kA38': { name: 'sortGroups', arr: [false, true] },
    'kA39': { name: 'fixRadiusCollision', arr: [false, true] },
    'kA40': { name: 'modernChanges', arr: [false, true] },
    'kA41': { name: 'staticRotate', arr: [false, true] },
    'kA42': { name: 'reverseSync', arr: [false, true] },
    'kA43': { name: 'noTimePenalty', arr: [false, true] },

    'kS1' : 'oldBgColR',
    'kS2' : 'oldBgColG',
    'kS3' : 'oldBgColB',
    'kS4' : 'oldGroundColR',
    'kS5' : 'oldGroundColG',
    'kS6' : 'oldGroundColB',
    'kS7' : 'oldLineColR',
    'kS8' : 'oldLineColG',
    'kS9' : 'oldLineColB',
    'kS10' : 'oldObjColR',
    'kS11' : 'oldObjColG',
    'kS12' : 'oldObjColB',
    'kS13' : 'oldObj2ColR',
    'kS14' : 'oldObj2ColG',
    'kS15' : 'oldObj2ColB',
    'kS16' : { name: 'oldBgPlayerCol', arr: ['none', 'primary', 'secondary'] },
    'kS17' : { name: 'oldGroundPlayerCol', arr: ['none', 'primary', 'secondary'] },
    'kS18' : { name: 'oldLinePlayerCol', arr: ['none', 'primary', 'secondary'] },
    'kS19' : { name: 'oldObjPlayerCol', arr: ['none', 'primary', 'secondary'] },
    'kS20' : { name: 'oldObj2PlayerCol', arr: ['none', 'primary', 'secondary'] },

    'kS29': 'oldBgColor',
    'kS30': 'oldGroundColor',
    'kS31': 'oldLineColor',
    'kS32': 'oldObjColor',
    'kS33': 'oldCol1',
    'kS34': 'oldCol2',
    'kS35': 'oldCol3',
    'kS36': 'oldCol4',
    'kS37': 'old3dlCol',
    'kS38': 'colors',
    'kS39': 'openColorPage'
}


const smartTemplateKeys = {
    1: 'id',
    2: 'name',
    3: 'patterns'
}


const smartTemplatePatternKeys = {
    1: 'objects'
}


const gameVariables = {
    '0001': 'editor.followPlayer',
    '0002': 'editor.playMusic',
    '0003': 'editor.swipe',
    '0004': 'editor.freeMove',
    '0005': 'editor.deleteFilter',
    '0006': 'editor.deleteObjectID',
    '0007': 'editor.rotateEnabled',
    '0008': 'editor.snapEnabled',
    '0009': 'editor.ignoreDamage',
    '0010': 'flip2PlayerControls',
    '0011': 'alwaysLimitControls',
    '0012': 'acceptedCommentRules',
    '0013': 'increaseMaxUndo',
    '0014': 'disableExplosionShake',
    '0015': 'flipPauseButton',
    '0016': 'acceptedSongTOS',

    '0018': 'noSongLimit',
    '0019': 'loadSongsToMemory',

    '0022': 'higherAudioQuality',
    '0023': 'smoothFix',
    '0024': 'showCursor',
    '0025': 'fullscreen',
    '0026': 'autoRetry',
    '0027': 'autoCheckpoints',
    '0028': 'disableThumbstick',
    '0029': 'showedUploadPopup',
    '0030': 'vsync',

    '0033': 'changeSongLocation',
    '0034': 'gameCenter',

    '0036': 'editor.previewMode',
    '0037': 'editor.showGround',
    '0038': 'editor.showGrid',
    '0039': 'editor.gridOnTop',
    '0040': 'showPercentage',
    '0041': 'editor.showObjectInfo',
    '0042': 'increaseMaxLevels',
    '0043': 'editor.effectLines',
    '0044': 'editor.triggerBoxes',
    '0045': 'editor.debugDraw',
    '0046': 'editor.hideUIOnTest',
    '0047': 'showedProfileText',

    '0049': 'editor.columns',
    '0050': 'editor.rows',
    '0051': 'showedNGMessage',
    '0052': 'fastPracticeReset',
    '0053': 'showedFreeGamesPopup',

    '0056': 'disableHighObjectAlert',
    '0057': 'editor.holdToSwipe',
    '0058': 'editor.durationLines',
    '0059': 'editor.swipeCycleMode',
    '0060': 'defaultMiniIcon',
    '0061': 'switchSpiderTeleportColor',
    '0062': 'switchDashFireColor',
    '0063': 'showedUnverifiedCoinsMessage',
    '0064': 'editor.selectFilter',
    '0065': 'enableMoveOptimization',
    '0066': 'highCapacityMode',
    '0067': 'highStartPosAccuracy',
    '0068': 'quickCheckpointMode',
    '0069': 'commentMode',
    '0070': 'showedUnlistedLevelMessage',

    '0072': 'disableGravityEffect',
    '0073': 'newCompletedFilter',
    '0074': 'showRestartButton',
    '0075': 'parental.disableComments',
    '0076': 'parental.disableAccountComments',
    '0077': 'parental.featuredLevelsOnly',
    '0078': 'editor.hideBackground',
    '0079': 'editor.hideGridOnPlay',

    '0081': 'disableShake',
    '0082': 'disableHighObjectAlert',
    '0083': 'disableSongAlert',
    '0084': 'manualOrder',

    '0088': 'compactComments',
    '0089': 'extendedInfoMode',
    '0090': 'autoLoadComments',
    '0091': 'createdLevelFolder',
    '0092': 'savedLevelFolder',
    '0093': 'increaseLevelsPerPage',
    '0094': 'moreComments',

    '0096': 'switchWaveTrailColor',
    '0097': 'editor.enableLinkControls',
    '0098': 'levelLeaderboardType',
    '0099': 'showLeaderboardPercent',
    '0100': 'practiceDeathEffect',
    '0101': 'forceSmoothFix',
    '0102': 'editor.editorSmoothFix'
}


const gameEvents = {
    1: 'challengeUnlocked',
    2: 'glubfubHint1',
    3: 'glubfubHint2',
    4: 'challengeCompleted',
    5: 'treasureRoomUnlocked',
    6: 'chamberOfTimeUnlocked',
    7: 'chamberOfTimeDiscovered',
    8: 'foundMasterEmblem',
    9: 'gatekeeperDialogue',
    10: 'scratchDialogue',
    11: 'scratchShopUnlocked',
    12: 'monsterDialogue',
    13: 'monsterFreed',
    14: 'demonKey1',
    15: 'demonKey2',
    16: 'demonKey3',
    17: 'shopkeeperDialogue',
    18: 'gdwOnlineUnlocked',
    19: 'monsterEncountered',
    20: 'communityShopUnlocked',
    21: 'potborDialogue',
    22: 'youtubeChest',
    23: 'facebookChest',
    24: 'twitterChest',
    25: 'explorersUnlocked',
    26: 'twitchChest',
    27: 'discordChest',
    28: 'towerClicked',
    29: 'towerEntered',
    30: 'acceptedTOS',
    31: 'zolgurothEncountered',
    32: 'redditChest',
    33: 'towerFloor1Completed',
    34: 'diamondShopUnlocked',
    35: 'mechanicUnlocked',
    36: 'mechanicDialogue',
    37: 'diamondShopkeeperDialogue'
}
//very much not stolen from colon https://gdcolon.com/gdsave/keys.js

const bool = [false, true]
const chestTypes = {
    1: 'small',
    2: 'large',
    3: '1key',
    4: '5key',
    5: '10key',
    6: '25key',
    7: '50key',
    8: '100key'
}
const chestRewardTypes = {
    1: 'Fire Shard',
    2: 'Ice Shard',
    3: 'Poison Shard',
    4: 'Shadow Shard',
    5: 'Lava Shard',
    6: 'Demon Key',
    7: 'Mana Orbs',
    8: 'Diamonds',
    9: 'Unique Item',
    10: 'Earth Shard',
    11: 'Blood Shard',
    12: 'Metal Shard',
    13: 'Light Shard',
    14: 'Soul Shard',
    15: 'Gold Key'
}
const chestUniqueItemRewardTypes = {
    1: 'cube',
    2: 'color1',
    3: 'color2',
    4: 'ship',
    5: 'ball',
    6: 'ufo',
    7: 'wave',
    8: 'robot',
    9: 'spider',
    10: 'trail',
    11: 'deathEffect',
    12: 'item',
    13: 'swing',
    14: 'jetpack',
    15: 'shipFire'
}
const questRewardTypes = { 1: 'orbs', 2: 'coins', 3: 'stars' }
const levelTypes = { 1: 'official', 2: 'local', 3: 'saved', 4: 'online' }
const levelLengths = ['Tiny', 'Short', 'Medium', 'Long', 'XL', 'Platformer']
const levelSpeeds = ['1x', '0.5x', '2x', '3x', '4x']
const demonTypes = ['Unknown', 'Hard', 'Unknown', 'Easy', 'Medium', 'Insane', 'Extreme']
const featureTypes = ['None', 'Epic', 'Legendary', 'Mythic']
const gamemodes = ['Cube', 'Ship', 'Ball', 'UFO', 'Wave', 'Robot', 'Spider', 'Swing', 'Jetpack']
const difficulties = {
    '-1': 'Unrated',
    '0': 'Auto',
    '1': 'Easy',
    '2': 'Normal',
    '3': 'Hard',
    '4': 'Harder',
    '5': 'Insane',
    '6': 'Demon'
}
const playerBasedLevelColor = {'-1': 'none', '1': 'primary', '2': 'secondary'}
const oldPlayerBasedLevelColor = ['none', 'primary', 'secondary']



const keys = {
    'GS_value': 'stats',
    'GS_completed': 'completedLevels',

    'GS_3': 'userCoins',
    'GS_4': 'bronzeUserCoins',
    'GS_5': 'mapPackStars',
    'GS_6': 'shopPurchases',
    'GS_7': 'levelProgress',
    'GS_8': '[unused]',
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
    'GS_26': 'activePath',
    'GS_27': 'completedLists',
    'GS_28': 'enabledItems',
    'GS_29': 'pathPricingFix',
    'GS_30': 'wraithRewards',
    'GS_31': 'eventRewards',

    'GLM_01': 'officialLevels',
    'GLM_02': 'uploadedLevels',
    'GLM_03': 'onlineLevels',
    'GLM_04': 'starredLevels',
    'GLM_05': '[unused]',
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
    'GLM_21': 'savedListsOld',
    'GLM_22': 'savedLists',
    'GLM_23': 'eventID',

    'GJA_001': 'username',
    'GJA_002': 'password',
    'GJA_003': 'accountID',
    'GJA_004': 'sessionID',
    'GJA_005': 'encryptedPassword',

    'LLM_01': 'localLevels',
    'LLM_02': 'binaryVersion',
    'LLM_03': 'localLists',

    'MDLM_001': 'songInfo',
    'MDLM_002': 'songPriority',
    'MDLM_003': '[unknownDict]',

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
    1: { name: 'jumps', enforce: BigInt },
    2: { name: 'attempts', enforce: BigInt },
    3: { name: 'officialLevelsCompleted', enforce: BigInt },
    4: { name: 'onlineLevelsCompleted', enforce: BigInt },
    5: { name: 'demons', enforce: BigInt },
    6: { name: 'stars', enforce: BigInt },
    7: { name: 'mapPacks', enforce: BigInt },
    8: { name: 'coins', enforce: BigInt },
    9: { name: 'destroyedPlayers', enforce: BigInt },
    10: { name: 'likedLevels', enforce: BigInt },
    11: { name: 'ratedLevels', enforce: BigInt },
    12: { name: 'userCoins', enforce: BigInt },
    13: { name: 'diamonds', enforce: BigInt },
    14: { name: 'orbs', enforce: BigInt },
    15: { name: 'completedDailies', enforce: BigInt },
    16: { name: 'fireShards', enforce: BigInt },
    17: { name: 'iceShards', enforce: BigInt },
    18: { name: 'poisonShards', enforce: BigInt },
    19: { name: 'shadowShards', enforce: BigInt },
    20: { name: 'lavaShards', enforce: BigInt },
    21: { name: 'demonKeys', enforce: BigInt },
    22: { name: 'totalOrbs', enforce: BigInt },
    23: { name: 'earthShards', enforce: BigInt },
    24: { name: 'bloodShards', enforce: BigInt },
    25: { name: 'metalShards', enforce: BigInt },
    26: { name: 'lightShards', enforce: BigInt },
    27: { name: 'soulShards', enforce: BigInt },
    28: { name: 'moons', enforce: BigInt },
    29: { name: 'spendableDiamonds', enforce: BigInt },
    30: { name: 'firePath', enforce: BigInt },
    31: { name: 'icePath', enforce: BigInt },
    32: { name: 'poisonPath', enforce: BigInt },
    33: { name: 'shadowPath', enforce: BigInt },
    34: { name: 'lavaPath', enforce: BigInt },
    35: { name: 'earthPath', enforce: BigInt },
    36: { name: 'bloodPath', enforce: BigInt },
    37: { name: 'metalPath', enforce: BigInt },
    38: { name: 'lightPath', enforce: BigInt },
    39: { name: 'soulPath', enforce: BigInt },
    40: { name: 'gauntlets', enforce: BigInt },
    41: { name: 'listRewards', enforce: BigInt },
    42: { name: 'insaneLevels', enforce: BigInt },
    43: { name: 'goldKeys', enforce: BigInt }
}


const questKeys = {
    1: { name: 'itemType', arr: questRewardTypes },
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
    2: { name: 'chest', arr: chestTypes },
    3: 'rewards'
}


const chestRewardKeys = {
    1: { name: 'item', arr: chestRewardTypes },
    2: 'itemID',
    3: 'amount',
    4: { name: 'itemValue', arr: chestUniqueItemRewardTypes }
}


const levelKeys = {
    'k1': 'id',
    'k2': 'name',
    'k3': { name: 'description', b64: true },
    'k4': 'levelData',
    'k5': 'author',
    'k6': 'playerID',
    'k7': { name: 'difficulty', arr: difficulties },
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
    'k21': { name: 'levelType', arr: levelTypes },
    'k22': 'likes',
    'k23': { name: 'length', arr: levelLengths },
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
    'k39': 'roughLevelSize',
    'k40': 'gameVersion',
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
    'k72': 'hasLDM',
    'k73': 'enableLDM',
    'k74': 'timelyID',
    'k75': { name: 'featureType', arr: featureTypes },
    'k76': { name: 'demonType', arr: demonTypes },
    'k77': 'isGauntlet',
    'k78': 'isAltGame',
    'k79': 'unlisted',
    'k80': 'editorTime',
    'k81': 'totalEditorTime',
    'k82': 'favorited',
    'k83': 'orderIndex',
    'k84': 'folder',
    'k85': 'clicks',
    'k86': 'bestAttemptTime',
    'k87': 'seed',
    'k88': 'scores',
    'k89': 'leaderboardValid',
    'k90': 'leaderboardPercentage',
    
    'k94': 'friendsOnly',
    'k95': 'lengthInFrames',
    'k96': 'orderedLevelIds',
    'k97': 'levels',
    'k98': 'uploadTimestamp',
    'k99': 'updateTimestamp',

    'k102': 'previewLockX',
    'k103': 'previewLockY',
    'k104': 'usedSongs',
    'k105': 'usedSFX',

    'k107': 'bestTime',
    'k108': 'bestPoints',
    'k109': 'localTimes',
    'k110': 'localScores',
    'k111': 'platformerLeaderboardSeed',
    'k112': 'disableShake',
    'k113': 'diamondReward',
    'k114': 'requiredLevels',

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
    1: 'fromRed',
    2: 'fromGreen',
    3: 'fromBlue',
    4: { name: 'playerColor', arr: playerBasedLevelColor },
    5: 'blending',
    6: 'id',
    7: 'fromOpacity',
    8: 'toggleOpacity',
    9: 'copyChannelId',
    10: 'colorHSV',
    11: 'toRed',
    12: 'toGreen',
    13: 'toBlue',
    14: 'deltaTime',
    15: 'toOpacity',
    16: 'duration',
    17: 'copyOpacity'
}


const levelHeaderKeys = {
    'kA1': 'audioTrack',
    'kA2': { name: 'gamemode', arr: gamemodes },
    'kA3': { name: 'miniMode', arr: bool },
    'kA4': { name: 'speed', arr: levelSpeeds },
    'kA5': { name: 'oldObj2Blending', arr: bool },
    'kA6': { name: 'background', enforce: BigInt },
    'kA7': { name: 'ground', enforce: BigInt },
    'kA8': { name: 'dualMode', arr: bool },
    'kA9': { name: 'useStartPos', arr: bool },
    'kA10': { name: 'twoPlayerMode', arr: bool },
    'kA11': { name: 'flippedGravity', arr: bool },
    'kA12': { name: 'unusedColor3Blending', arr: bool },
    'kA13': { name: 'musicOffset', enforce: Number },
    'kA14': 'guidelines',
    'kA15': { name: 'fadeIn', arr: bool },
    'kA16': { name: 'fadeOut', arr: bool },
    'kA17': { name: 'groundLine', enforce: BigInt },
    'kA18': { name: 'font', enforce: BigInt },
    'kA19': { name: 'startPosTargetOrder', enforce: BigInt },
    'kA20': { name: 'reverseGameplay', arr: bool },
    'kA19': { name: 'startPosDisabled', arr: bool },
    'kA22': { name: 'isPlatformer', arr: bool },

    'kA25': { name: 'middleground', enforce: BigInt },
    'kA26': { name: 'startPosTargetChannel', enforce: BigInt },
    'kA27': { name: 'multiRotation', arr: bool },
    'kA28': { name: 'mirrorMode', arr: bool },
    'kA29': { name: 'rotateGameplay', arr: bool },

    'kA31': { name: 'playerSqueeze', arr: bool },
    'kA32': { name: 'fixGravity', arr: bool },
    'kA33': { name: 'fixScale', arr: bool },
    'kA34': { name: 'fixRobot', arr: bool },
    'kA35': { name: 'startPosResetCamera', arr: bool },
    'kA36': { name: 'spawnGroup', enforce: BigInt },
    'kA37': { name: 'dynamicHeight', arr: bool },
    'kA38': { name: 'sortGroups', arr: bool },
    'kA39': { name: 'fixRadiusCollision', arr: bool },
    'kA40': { name: 'modernChanges', arr: bool },
    'kA41': { name: 'staticRotate', arr: bool },
    'kA42': { name: 'reverseSync', arr: bool },
    'kA43': { name: 'noTimePenalty', arr: bool },

    'kA45': { name: 'decreaseBoostSlide', arr: bool },

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
    'kS16' : { name: 'oldBgPlayerCol', arr: oldPlayerBasedLevelColor },
    'kS17' : { name: 'oldGroundPlayerCol', arr: oldPlayerBasedLevelColor },
    'kS18' : { name: 'oldLinePlayerCol', arr: oldPlayerBasedLevelColor },
    'kS19' : { name: 'oldObjPlayerCol', arr: oldPlayerBasedLevelColor },
    'kS20' : { name: 'oldObj2PlayerCol', arr: oldPlayerBasedLevelColor },

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


const rewardKeys = {
    '0001': 'challengeBeat',
    '0002': 'demonGuardianReleased',
    '0003': 'chamberOfTime',
    '0004': '50keyTreasure',
    '0005': '100keyTreasure',
    '0006': '200keyTreasure',
    '0007': 'youtube',
    '0008': 'twitter',
    '0009': 'facebook',
    '0010': 'twitch',
    '0011': 'discord',
    '0012': 'adChest1',
    '0013': 'adChest2',
    '0014': 'adChest3',
    '0015': 'adChest4',
    '0016': 'adChest5',
    '0017': 'adChest6',
    '0018': 'adChest7',
    '0019': 'adChest8',
    '0020': 'adChest9',
    '0021': 'adChest10',
    '0022': 'zolguroth',
    '0023': 'helpButton',
    '0024': 'reddit 🤓',
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
    '0048': 'viewedOwnProfile',
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
    '0071': 'hidePracticeButtons',
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
    '0095': 'doNot',
    '0096': 'switchWaveTrailColor',
    '0097': 'editor.enableLinkControls',
    '0098': 'levelLeaderboardType',
    '0099': 'showLeaderboardPercent',
    '0100': 'practiceDeathEffect',
    '0101': 'forceSmoothFix',
    '0102': 'editor.editorSmoothFix',
    '0103': 'editor.layerLocking',
    '0104': 'editor.recordOrder',
    '0105': 'editor.startposPlayback',
    '0106': 'showMeltdownPromo',
    '0108': 'autoEnableLowDetail',
    '0109': 'showLevelInfoLabel',
    '0110': 'editor.fastPreview',

    '0112': 'editor.increaseScaleLimit',
    '0113': 'flipPlatformerControls',

    '0115': 'showFPS',
    '0116': 'useCustomFPS',
    '0117': 'editor.previewParticles',
    '0118': 'editor.previewAnimations',
    '0119': 'dontSaveLevels',

    '0121': 'editor.hideInvisible',
    '0122': 'disableMenuMusic',

    '0125': 'editor.unlockPracticeMusic',
    '0126': 'decimalPercentage',
    '0127': 'saveGauntletLevels',
    '0128': 'lockCursor',
    '0129': 'disablePortalLabels',
    '0130': 'enableOrbLabels',
    '0131': 'editor.smartTemplateUseNearby',
    '0132': 'editor.smartTemplateDontDelete',
    '0133': 'editor.groupIDFilter',
    '0134': 'hideAttemptsPractice',
    '0135': 'hideAttempts',
    '0136': 'extraLDM',
    '0137': 'editor.hideParticleIcons',

    '0139': 'editor.colorChannelFilter',
    '0140': 'disableOrbScale',
    '0141': 'disableTriggerOrbScale',
    '0142': 'reduceAudioQuality',

    '0144': 'audioVisualizer',
    '0145': 'showTime',
    '0146': 'disableCheckpoints',
    '0147': 'sfxLibrarySearchFolder',
    '0148': 'sfxLibraryCompactMode',
    '0149': 'editor.showClicks',
    '0150': 'editor.autoPause',
    '0151': 'editor.startOptimization',
    '0152': 'editor.hidePath',
    '0153': 'explodeOnDeath',

    '0155': 'disableShaderAntiAliasing',
    '0156': 'editor.disablePasteStateGroups',
    '0157': 'sawLevelUploadGuidelines',
    '0158': 'editor.previewShaders',
    '0159': 'audioFix01',

    '0163': 'quickKeys',
    '0164': 'levelLeaderboardMode',

    '0166': 'showHitboxesPractice',
    '0167': 'confirmExit',
    '0168': 'fastMenu',
    '0169': 'editor.smallWarpButtons',
    '0170': 'borderlessFullscreen',
    '0171': 'disablePlayerHitbox',
    '0172': 'disableShakeNew',
    '0173': 'editor.ignoreDamageTestmode',
    '0174': 'editor.hidePlaytestText'
}


const dataKeeperTypes = {
    'gv': ['gameVariables', gameVariables],
    'c0': ['primaryColors', {}],
    'c1': ['secondaryColors', {}],
    'i': ['unlockedCubes', {}],
    'ship': ['unlockedShips', {}],
    'ball': ['unlockedBalls', {}],
    'bird': ['unlockedUFOs', {}],
    'dart': ['unlockedWaves', {}],
    'robot': ['unlockedRobots', {}],
    'spider': ['unlockedSpiders', {}],
    'swing': ['unlockedSwings', {}],
    'jetpack': ['unlockedJetpacks', {}],
    'special': ['unlockedTrails', {}],
    'shipstreak': ['unlockedShipTrails', {}],
    'death': ['unlockedDeathEffects', {}]
}


const unlockValueKeeperKeys = {
    'ugv_1': { name: 'challengeUnlocked', arr: bool },
    'ugv_2': { name: 'glubfubHint1', arr: bool },
    'ugv_3': { name: 'glubfubHint2', arr: bool },
    'ugv_4': { name: 'challengeCompleted', arr: bool },
    'ugv_5': { name: 'treasureRoomUnlocked', arr: bool },
    'ugv_6': { name: 'chamberOfTimeUnlocked', arr: bool },
    'ugv_7': { name: 'chamberOfTimeDiscovered', arr: bool },
    'ugv_8': { name: 'foundMasterEmblem', arr: bool },
    'ugv_9': { name: 'gatekeeperDialogue', arr: bool },
    'ugv_10': { name: 'scratchDialogue', arr: bool },
    'ugv_11': { name: 'scratchShopUnlocked', arr: bool },
    'ugv_12': { name: 'monsterDialogue', arr: bool },
    'ugv_13': { name: 'monsterFreed', arr: bool },
    'ugv_14': { name: 'demonKey1', arr: bool },
    'ugv_15': { name: 'demonKey2', arr: bool },
    'ugv_16': { name: 'demonKey3', arr: bool },
    'ugv_17': { name: 'shopkeeperDialogue', arr: bool },
    'ugv_18': { name: 'gdwOnlineUnlocked', arr: bool },
    'ugv_19': { name: 'monsterEncountered', arr: bool },
    'ugv_20': { name: 'communityShopUnlocked', arr: bool },
    'ugv_21': { name: 'potborDialogue', arr: bool },
    'ugv_22': { name: 'youtubeChest', arr: bool },
    'ugv_23': { name: 'facebookChest', arr: bool },
    'ugv_24': { name: 'twitterChest', arr: bool },
    'ugv_25': { name: 'explorersUnlocked', arr: bool },
    'ugv_26': { name: 'twitchChest', arr: bool },
    'ugv_27': { name: 'discordChest', arr: bool },
    'ugv_28': { name: 'towerClicked', arr: bool },
    'ugv_29': { name: 'towerEntered', arr: bool },
    'ugv_30': { name: 'acceptedTOS', arr: bool },
    'ugv_31': { name: 'zolgurothEncountered', arr: bool },
    'ugv_32': { name: 'redditChest', arr: bool },
    'ugv_33': { name: 'towerFloor1Completed', arr: bool },
    'ugv_34': { name: 'diamondShopUnlocked', arr: bool },
    'ugv_35': { name: 'mechanicUnlocked', arr: bool },
    'ugv_36': { name: 'mechanicDialogue', arr: bool },
    'ugv_37': { name: 'diamondShopkeeperDialogue', arr: bool },
    'ugv_38': { name: 'wraithDialogue', arr: bool }
}
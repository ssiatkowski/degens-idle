function calculateROI(upgrades) {
    let roiList = [];

    upgrades.forEach(upgrade => {
        let name = upgrade.name;
        let cost = upgrade.cost;
        let earnings = upgrade.earnings;

        // Check if earnings are defined
        if (earnings === undefined) {
            console.log(`Skipping upgrade '${name}' due to missing 'earnings' key.`);
            return; // Skip this upgrade if 'earnings' is missing
        }

        // Calculate basic ROI
        let basicResourcesCost = 
            (cost.copium || 0) +
            (cost.delusion || 0) +
            (cost.yachtMoney || 0) +
            (cost.trollPoints || 0);
        let basicROI = basicResourcesCost > 0 ? (earnings.basic || 0) / basicResourcesCost : 0;

        // Calculate hopium ROI
        let hopiumROI = (cost.hopium > 0) ? (earnings.hopium || 0) / cost.hopium : 0;

        // Calculate knowledge ROI
        let knowledgeROI = (cost.knowledge > 0) ? (earnings.knowledge || 0) / cost.knowledge : 0;

        // Calculate power ROI
        let powerROI = (cost.power > 0) ? (earnings.power || 0) / cost.power : 0;

        // Store all ROIs for this upgrade
        roiList.push({
            name: name,
            basicROI: basicROI,
            hopiumROI: hopiumROI,
            knowledgeROI: knowledgeROI,
            powerROI: powerROI
        });

        console.log(`Calculated ROIs for ${name}: basicROI = ${basicROI}, hopiumROI = ${hopiumROI}, knowledgeROI = ${knowledgeROI}, powerROI = ${powerROI}`);
    });

    return roiList;
}

const roiData = calculateROI(upgrades);
console.log(roiData);

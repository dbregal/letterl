// SPDX-License-Identifier: MIT

pragma ton-solidity >=0.61.2;

contract DealLedger {
    struct Step {
        uint256 hash;
        uint64 timestamp;
        address signer;
    }

    struct Deal {
        address[] participants;
        mapping(uint32 => Step) steps;
        uint32 stepCount;
    }

    mapping(uint256 => Deal) public deals;

    function createDeal(uint256 dealId, address[] participants) external {
        require(deals[dealId].participants.length == 0, 100);
        deals[dealId].participants = participants;
    }

    function addStep(uint256 dealId, uint256 actionHash) external {
        Deal storage d = deals[dealId];
        require(isParticipant(dealId, msg.sender), 101);
        d.stepCount += 1;
        d.steps[d.stepCount] = Step(actionHash, now, msg.sender);
    }

    function getSteps(uint256 dealId) external view returns (Step[] memory) {
        Deal storage d = deals[dealId];
        Step[] memory arr = new Step[](d.stepCount);
        for (uint32 i = 1; i <= d.stepCount; i++) {
            arr[i - 1] = d.steps[i];
        }
        return arr;
    }

    function isParticipant(uint256 dealId, address actor) private view returns (bool) {
        Deal storage d = deals[dealId];
        for (uint i = 0; i < d.participants.length; i++) {
            if (d.participants[i] == actor) {
                return true;
            }
        }
        return false;
    }
}

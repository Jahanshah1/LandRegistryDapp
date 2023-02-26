pragma solidity ^0.8.0;


contract LandTitleRegistry {

    struct LandTitle {
        uint titleNumber;
        address owner;
        string location;
        uint registrationDate;
        bool verified;
    }

    mapping (uint => LandTitle) landTitles;

    function registerLandTitle(uint _titleNumber, address _owner, string memory _location, uint _registrationDate) public {
 
        LandTitle memory newLandTitle = LandTitle({
            titleNumber: _titleNumber,
            owner: _owner,
            location: _location,
            registrationDate: _registrationDate,
            verified: false
        });
  
        landTitles[_titleNumber] = newLandTitle;
    }


    function verifyLandTitle(uint _titleNumber) public {
        LandTitle storage landTitle = landTitles[_titleNumber];
        landTitle.verified = true;
    }

    function isLandTitleVerified(uint _titleNumber) public view returns (bool) {
        LandTitle storage landTitle = landTitles[_titleNumber];
        return landTitle.verified;
    }

}
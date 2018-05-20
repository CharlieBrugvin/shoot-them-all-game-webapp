export const defaultSetting = {
    
        // ----- settings of the ship -----
        ship: {
            size: {
                'width.%':  12,
                'height.%': 10
            },
            speed: 0.05, // expressed in % per ms.
            max_laser_amount: 10 // TODO is it used ?
        },
    
        // ------ settings of an invader -----
    
        invader_column: {
            number: 12,
        },
        
        invader: {
            'height.%': 10,
            speed: {
                min: 0.002,
                max: 0.006
            },
            probability_shooting: 0.5 / 1000, // expressed in number of lasers shot by one invader during 1 ms
            probabity_creation: 0.25 // the probability of an invader to be created when an other died
        },
    
        // ----- settings of a ship laser ------
        laser_ship: {
            size: {
                'width.%': 1,
                'height.%': 4.4
            },
            speed: {
                min: 0.07,
                max: 0.09
            },
            damages: 35
        },
    
        // ----- settings of an invader laser -----
        laser_invader: {
            size: {
                'width.%': 0.8,
                'height.%': 4
            },
            speed: {
                min: 0.03,
                max: 0.05
            },
            damages: 5
        },
    
        // ---- points management -----
        points : {
            invader_killed: 1,
            invader_went_outside: -2,
        },
    
        // ----- game -----
        fps: 60,
    }
    
    
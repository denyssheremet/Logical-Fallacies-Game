
var metaModelSentences = {
    "Level 1": {
        "Unspecified Noun": {
            explanation:
                `
            Nouns which do not refer to something specific
            ___
            - Men do this...            -> Who specifically does this?     
            - The audience loved it.    -> Who specifically loved it?     
            - I know a lot of words.    -> Which words do you know?  
            ___
            `,
            yes:
                `
            Just Do It!
            Books are interesting
            They are evil
            People like my idea
            Americans like eating a lot of sandwiches                      
            Studens are cheap
            Germans are funny
            Trump appeals to voters
            People call me and they tell me: Donald, you are absolutely right
            Some people might think some very specific thoughts right now
            `,
            q:
                `
            Just do what specifically?
            Which books are interesting?
            Who specifically is evil?
            Who specifically likes your idea?
            Who specifically likes eating sandwiches? ALL Americans?
            Who specifically is cheap?
            Who specifically is funny? ALL Germans?
            Who specifically does Trump appeal to?
            Who specifically calls you?
            Who specifically is thinking what thoughts right now?
            `,
            examples:
                `
    Experts say that eating apples is good for you
    People need to hear this
    I have lots of skills
    Things need to be done properly
    Those people need to be disciplined
    Medicine is expensive 
    One knows what's best
    People shouldn't do that 
    It's either them or us
    Americans can express themselves 
    Designers have great taste
                `,
            questions:
                `
    Who specifically says that?
    Who specifically needs to hear this?
    Which skills do you have?
    Which things need to be done properly?
    Who specifically needs to be disciplined?
    Which medicine is expensive?
    Who knows what is best?
    Who shouldn't do that?
    It's either whom or whom?
    Who specifically can express themselves?
    Who specifically are you talking about? All of them?
                `
        },
        "Simple Deletion": {
            explanation:
                `
            A sentence in which a word has been deleted.
            ___
            - I feel. -> What do you feel?
            - They believe. -> What do they believe?
            - He doesn't understand. -> What doesn't he understand?
            ___
            `,
            yes:
                `
            Look at how the carpet.
            I like how my microwave.
            Yes We Can!
            I know.
            I feel.
            I told him and he agreed.
            They are talking.
            I am thinking.
            You need to grow.
            Nobody is listening.
            Now you can see.
            `,
            q:
                `
            Look at how the carpet what?
            You like how your microwave does what?
            Yes We Can Do What?
            What do you know?
            What do you feel?
            What did you tell him?
            What are they talking about?
            What are you thinking about?
            What do you need to grow?
            What are they not listening to?
            What do you see?
            `,
            examples:
                `
    You can't teach me
    Hans can manage 
    I just can't start
    He is wrong 
    I know 
    I feel
    I don't want to
    Never again 
    He can't
    I'm trying
`,
            questions:
                `
            You can't teach me about what?
            Hans can't manage what?
            What can't you start?
            He is wrong about what?
            What don't you know?
            What do you feel?
            What do you not want to do?
            Never again what?
            He can't do what?
            What are you trying to do?
    `
        },
        "Comparative Deletion": {
            explanation:
                `
            Comparative deletions are the worst.
            ___
            This is a better idea. -> Better than what?
            Apples are better than oranges -> In what way are they better?
            Comparative deletions are the worst. -> Worse than what?
            ___
            `,
            yes:
                `
            Marbles are better. 
            This is the best project.
            Dutch people are more creative than Austrians. 
            We the best.
            We are the champions. 
            I'm winning. 
            This is the best option. 
            He is the worst.
            He gets the most out of life.
            Ferarris are better than Lamborghinis
            `,
            q:
                `
            Marbles are better than what? Better for what?
            Best compared to what? 
            How do you measure creativity?
            We are the best at what? We are better than who?
            We are the champions at what?
            What are you winning at?
            Best option compared to what?
            Worst at doing what? Worse than who? 
            Compared to whom? In what way is he getting the most out of life? 
            Better in what way?
            `,
            examples:
                `
    Our new product is more effective
    This is far more efficient 
    He's more sensitive
    Soccer is the best sport
    That's better
    She goes further
    You look happier
    This is getting much easier
    Hard beds are better 
    I'm enjoying this so much more
`,
            questions:
                `
            More effective than what?
            More efficient than what?
            More sensitive than who?
            Soccer is better than what? In which way?
            Better than what? Better in what way?
            Further than what?
            Happier compared to what?
            Easier than what?
            Better than what? In what way?
            More than what?
    `
        },
    },
    "Level 2": {
        "Nominalization": {
            explanation:
                `
            The turning of a verb or adjective into a noun.
            ___
            We are in a discussion -> We are discussing.
            I have anger -> I feel angry.
            I have a presentation -> I am presenting.
            ___
            The proliferation of nominalizations in a discursive formation may be an indication of pomposity and abstraction.
            -> ???
            ___
            `,
            yes:
                `
            I am giving him information.
            He is a true salesman.
            We are in an argument. 
            I have a feeling. 
            I'm not a painter. 
            I don't have creativity.
            I can't reach happiness.
            I want to work in education. 
            This is a disruption. 
            I am a student / teacher / educator.
            `,
            q:
                `
            So you are informing him, of what do you inform him?
            So he sells, what does he sell?
            So you are arguing, what are you arguing about?
            So you feel something, what do you feel?
            So you're not painting, what do you want to paint?   
            So you aren't working creatively, what do you want to create?     
            So you are not happy now, what can you do to feel happy?
            So you want to educate, what to you want to teach and to whom?
            So this disrupts something, what does this disrupt?
            So you study / teach / educate, what do you study / teach / educate?
            `,
            examples:
                `
    I want recognition
    We have made our decision 
    Your work needs more attention
    I have a bad feeling 
    I want more choice
    There's no connection 
    We had a great meeting
    Failure worries me 
    I want more engagement 
    Decisions are hard
`,
            questions:
                `
            So you want to be recognized, by whom? For what?
            What have you decided?
            What do I need to attend to?
            What do you feel?
            What do you want to choose?
            So, it doesn't connect, connect to what?
            What did you do when you met each other?
            So you don't want to fail. Fail at what? In what way?
            Who do you want to engage? In what way?
            Deciding about what do you find difficult?
    `
        },
        "Unspecified Verb": {
            explanation:
                `
            A verb that is vague.
            ___
            I'm taking it easy. -> What are you doing specifically?
            She is becoming smarter -> How is she becoming smarter? What is she doing?
            They are hanging out. -> What specifically are they doing?
            ___
            `,
            yes:
                `
            We need to grow this company.
            We need to disrupt eduction.
            They are endangering the project.
            They are destroying education.
            They are obstructing this process.
            We are working together. 
            I'm thinking about it. 
            I'm working on it. 
            He is waiting on his chance.
            They are looking for opportunities.
            `,
            q:
                `
            How (specifically) do you need to grow the company?
            How (specifically) do we need to disrupt education? 
            How (specifically) are they endangering the project?
            How (specifically) are they destroying education?
            How (specifically) are they obstructing this process?
            How (specifically) are you working together?
            What do you think?
            How (specifically) are you working on it?
            How (specifically) is he waiting on his chance?
            How (specifically) are they looking for opportunities?
            `,
            examples:
                `
    I'm enjoying the sun
    I took care of that problem you told me about 
    This makes my day
    I've taken the heat out of the situation 
    They get on really well with each other
    He's running the department badly 
    He is going places 
    She is thriving
    I'm running on empty
    Throughout this project I have grown and learned a lot
`,
            questions:
                `
            In what way are you enjoying the sun?
            How did you take care of it?
            How does this make your day?
            What did you do?
            How do they get on well? What do they do?
            How is he running the department? What is he doing?
            What is he doing?
            What is she doing?
            How are you running on empty? What are you doing?
            In what way have you grown? What have you learned?
    `
        },
        "Universal Quantifiers": {
            explanation:
                `
            Words like Everything, Nothing, Everybody, Nobody, Always, Never, ...
            ___
            This always works -> Always? 
            They never look down. -> Never?
            Everybody I know has a goldfish -> Everybody?
            ___
            `,
            yes:
                `
            All people do this. 
            Nobody understands me.
            All cats are relaxed. 
            All men/women/... are/do ...
            This never works. 
            Everything is yellow. 
            I can't see anything. 
            Everybody knows about this.
            This trick always works.
            `,
            q:
                `
            All people? Was there ever somebody that didn't?
            Nobody? Not even you? Was there ever somebody that did?
            All cats? Was there ever a cat that wasn't?
            All ...? Ware there ever one that didn't?
            Never? Did it ever work?
            Everything? Is there anything that is another color?
            Nothing? Is there anything you can see?
            Everybody? Is there anybody that doesn't?
            Always? Has it ever not worked?
            `,
            examples:
                `
He never listens to me
He always tells the truth
All companies are greedy 
No one cares about anything anymore
Nothing is the same anymore 
Everyone exaggerates everything
Nothing works here 
Everybody here works too hard
Everybody's talking about it 
She always has an excuse for everything
`,
            questions:
                `
            Never? Has he ever listened to anything you said?
            Always? Has he ever not done that?
            All companies? 
            No one? Anything?
            Nothing?
            Everyone? Everything?
            Nothing?
            Everybody?
            Everybody?
            Always? For everything?
    `
        },
    },
    "Level 3": {

        "Lost Performative": {
            explanation:
                `
            Opinion presented as fact.
            ___
            This is the correct way to eat apples. -> According to whom?
            It is bad to judge others. -> According to whom?
            This is a better way to do it. -> According to whom?
            ___
            `,
            yes:
                `
            This is awesome. 
            Drinking 5 liters of water a day is good.
            Blue is sooo 2009.
            That blue dress is overpriced.
            Well, that escalated quickly. 
            Piano music is boring.
            Donald had great hair. 
            Picasso is the best painter. 
            That was a terrible movie. 
            Working out every day is good for your health.
            `,
            q:
                `
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            `,
            examples:
                `
Managers are overpaid
You can't trust salespeople
Marketing is an easy job
People like people who are like them
They are good people
People learn from people who are different
Mistakes have been made 
This report needs finishing
Nobody is pulling their weight 
People are more flexible these days 
`,
            questions:
                `
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
            According to whom?
    `
        },
        "Mind Reading": {
            explanation:
                `
            Pretending to know what somebody else thinks.
            ___
            You really like me. -> How do you know that?
            You cannot stand authority. -> How do you know that?
            I know you are feeling good about that car. -> How do you know that?
            ___
            `,
            yes:
                `
            And hold on, I know what you are thinking.
            I don't want to talk to John, he is angry at me. 
            You are full of energy. 
            I know you think that ...
            I know you are going to dislike/like this.
            They haven't thought about this yet. 
            She hasn't realized this yet. 
            I know you want a change. 
            You're going to like this, because you feel happy.
            I know you are thinking of making a change in your life.
            `,
            q:
                `
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            `,
            examples:
                `
I know you don't believe me 
She's really happy now
He'll laugh at this
I know you just don't care about me
They will think I'm stupid
My boss thinks I'm lazy 
Everyone is judging me
I know you understand effective MS Paint is
You know this isn't working 
I know what you mean
`,
            questions:
                `
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
            How do you know that?
    `
        },
        "Cause and Effect": {
            explanation:
                `
            Saying that something causes something else. 
            A.K.A. blaming others.
            ___
            I couldn't do this because my mom called me. -> Can't you do anything when your mom calls you?
            Fish make me sad. -> How do you become sad when you encounter fish?
            I didn't write this paper because it rained. -> So when it rains, it is impossible for you to write a paper?
            ___
            `,
            yes:
                `
            It hasn't worked in the past, so it won't work now.
            You make me mad.
            This pisses me off.
            The exams give me anxiety. 
            Having success in what you do makes you happy.
            X causes Y.
            The rain is causing me to feel like X.
            I can't finish my work on time because of X. 
            I can't do that because I have not studied math.
            They are that way because they grew up in a poor neighborhood.
            `,
            q:
                `
            How does that lead to each other? Has there ever been something that didn't work the first couple of times, but did work after that?
            How do you know it's me that is making you mad? Do I have control over your brain?
            How do you know it's this that is pissing you off? Was there ever a time this didn't piss you off?
            How do you know that you feel anxious because of the exams? Can there be some other reason?
            How (specifically) does having success make you happy (according to you)?
            How do you know that X causes Y?
            How do you know that it's the rain that is causing you to feel like X?
            How do you know that it's because of X that you can't finish your work on time?
            How does not having studied math make it impossible to do that?
            Are there any people who grew up in a poor neighborhood that are not that way?
            `,
            examples:
                `
Because of you I feel bad
This exercise will cause me to be inspired
Studying architecture will make you sad
If I do that I'll get into trouble
My boss makes me angry
Music makes me relax
Eating chocolate makes me happy
We can't do that because he won't listen
There's no point trying, he won't listen
Working in a multidisciplinary group causes problems
`,
            questions:
                `
            How can I make you feel bad? Could there be any other reason?
            How do you know this exercise will cause you to be inspired?
            Can it be that something else is making you sad? How can architecture make you sad?
            How do you know that?
            How can he do that?
            How can music do that?
            How do you know that it's the chocolate that is making you thinner?
            How does him not listening cause you not being able to do this?
            How does him not listening lead to there being no point in trying?
            How does working in a multidisciplinary group cause problems? Was there ever a time when it worked fine?
    `
        },
    },
    "Level 4": {
        "Modal Operator of Necessity": {
            explanation:
                `
            Saying that something HAS to happen. 
            ___
            You have to clean your room. -> What would happen if I didn't?
            They have to stop doing that. -> What would happen if they didn't?
            You must listen to me. -> What would happen if I didn't?
            ___
            `,
            yes:
                `
            You need to do X.
            You need to go to go to school.
            You need to tell me the truth right now. 
            You have to believe me. 
            They need to go home now. 
            They have to listen to me.
            They need to understand this.
            John should lose some weight.
            You should visit your grandma.
            They should listen to him. 
            `,
            q:
                `
            What would happen if you didn't do X?
            What would happen if you didn't?
            What would happen if you didn't?
            What would happen if you didn't?
            What would happen if they didn't?
            What would happen if they didn't?
            What would happen if they didn't?
            What would happen if hw didn't?
            What would happen if you didn't?
            What would happen if they didn't?

            `,
            examples:
                `
    You have to educate yourself
    You must arrive on time for tomorrow's meeting
    I must buy a new Tesla Model X from you right now
    You have to dress yourself in a tuxedo right now
    You must be polite to Eric
    I have to drive this train until 20:00
    I mustn't leave this appartment yet
    You need to make a strategy
    This project must succeed
    You mustn't read this sentence right now
`,
            questions:
                `
           What would happen if I didn't? 
           What would happen if I didn't? 
           What would happen if I didn't? 
           What would happen if I didn't? 
           What would happen if I wasn't? 
           What would happen if I didn't? 
           What would happen if I did? 
           What would happen if I  didn't? 
           What would happen if it doesn't? 
           What would happen if I did? 
    `
        },
        //         "Modal Operator of Possibility": {
        // explanation: 
        // `

        // `,
        //             yes: 
        //             `

        //             `,
        //             no: 
        //             `

        //             `,
        //             questions: [
        //                 "",
        //                 "",
        //                 "",
        //             ],
        //             examples:
        //                 `
        //     I can't tell you the truth about what my given name is
        //     I can't go to your place now 
        //     I can't relax my right leg
        //     I can't call Eric now 
        //     I'll never be to able to learn how to tie my shoes
        //     I won't be able to complete project X before the deadline tomorrow
        //     I can't sleep now
        //     I can't apply for job X
        //     I couldn't possibly tell you what my real name is now
        //     I might not finish report X before 15:00 today 
        //     Today, I couldn't ask Jennie to raise my pay 5%
        //     I can't imagine that you showered with cold water today
        //     I can't concentrate on working on my job at the moment
        //     Tomorrow, I might just tell him that I stole his Apple watch
        //     I couldn't fire her from her current position
        //     I could eat an apple if I tried 
        //     I might do what he says I should do at 19:00
        // `},
        "Presupposition": {
            explanation:
                `
            Realize that you already know what presuppositions are. 
            ___
            Do you realize that you're worried? -> What makes you assume that I'm worried?
            I wonder when you will do a backflip. -> What makes you assume I'll do a backflip?
            You used to be happy. -> What makes you assume that I'm not happy now?
            ___
            `,
            yes:
                `
            You can begin to calm down now. 
            Do you realize that you are repressing your emotions?
            I wonder whether you'll notice how beautiful the ceiling is. 
            When are going to realize that you are repressing your emotions?
            What are you going to cook for dinner tonight?
            Have you decided what you are going to cook for dinner tonight?
            Do you know when you will have decided what you are going to have cooked for dinner tonight?
            After you get out of that frustration, let me know what you will cook for dinner tonight.
            I think it is the lobster that they want to steal tonight.
            After you've done X, will you have time to do Y?
            `,
            q:
                `
            What makes you assume that I'm not calm now?
            What makes you assume that I'm repressing emotions?
            What makes you assume that the ceiling is beautiful?
            What makes you assume that I'm repressing emotions?
            What makes you assume that I'm going to cook dinner tonight?
            What makes you assume that I'm going to cook dinner tonight?
            What makes you assume that I'm going to cook dinner tonight?
            What makes you assume that I feel frustrated and that I'm going to cook dinner tonight?
            What makes you assume that they are going to steal something tonight?
            What makes you assume that I will do X?
            `,
            examples:
                `
When this plan has failed, I'll say 'told you so'
After you've cleaned the dishes, could you clean the floor?
Do you realize that you are thinking of orange trees?
Who are you going to fire next?
I wonder when you will realize that you are repressing your emotions
What's going to go wrong next?
Are you going to cook Italian tonight, or Greek?
How are you going to take out the trash today?
What are you trying to conceal?
Most people don't realize that chocolate contains no sugar at all
`,
            questions:
                `
            What makes you assume that the plan will fail?
            What makes you assume that I'm going to clean the dishes?
            What makes you assume that I'm thinking of orange trees??
            What makes you assume that I'm going to fire somebody?
            What makes you assume that I'm repressing my emotions?
            What makes you assume that something is going to go wrong next?
            What makes you assume that I'm going to cook tonight?
            What makes you assume that I'm going to take out the trash today?
            What makes you assume that I'm trying to conceal something?
            What makes you think that chocolate contains no sugar at all?
    `
        },
        "Complex Equivalence": {
            explanation:
                `
    Saying that an external event is equated to a internal state/emotion.
    ___
    The dog is barking, so he must hate me. -> How do you know that?
    They are blinking a lot, so they must be happy. -> How do you know that?
    That bird is looking at me the whole time, he must be out to get me. -> How do you know that?
    ___
    `,
            yes:
                `
    This means that.
    He is eating pizza, so he must be have had a great day. 
    Everybody is sitting, so they must be confused.
    They haven't called back, so they are not interested.
    I stuttered, it was a bad presentation.
    She asked a lot of questions, so she must not be interested. 
    He was born in February, so he must be eccentric.
    They raised their voice, so they must be angry about something.
    They are blinking a lot, so they must be up to something.
    When we shook hands, they squeezed hard. They must be out to get me.           
    `,
            q:
                `
    How do you know this means that? Could that be caused by something else? Could it mean something else?
    How do you know him eating pizza means that he had a great day? Could it mean something else?
    How does them sitting mean that they are confused? Could it mean something else?
    How does them not calling back yet mean that they don't care? Could it mean something else?
    How do you know that stuttering means having a bad presentation? Could it mean something else?
    How does asking a lot of questions mean not being interested? Could it mean something else?
    How does being born in February mean being eccentric? Could it mean something else?
    How does them raising their voice mean that they are angry? Could it mean something else? 
    How does blinking a lot mean that they must be up to something? Could it mean something else?
    Could them squeezing hard mean something else?
    `,
            examples:
                `
He's silent, that means he is up to something
A good relationship means never having to say sorry
Staying in this job means working harder
That means trouble
He came in late on Saturday. That means I'm going to have to fire him
He wears the same colour shirt as the boss: that means he's in for promotion
I saw them down the pub together; they must be having an affair
He doesn't  talk to me, so he doesn't care about me
She goes down to the gym, so she is healthy
Seeing this sentence means you are almost done!
`,
            questions:
                `
                How do you know that means he is up to something?
                How do you know that means never having to say sorry
                How do you know that means working harder
                How do you know that means trouble
                How do you know that means you're going to have to fire him?
                How do you know that means that he's in for a promotion?
                How do you know that means they are having an affair?
                How do you know that means that he doesn't care about you?
                How do you know that means that means she is healthy?
                Wait, really?
    `
        },
    }
}
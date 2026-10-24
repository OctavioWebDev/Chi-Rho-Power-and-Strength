import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Entry } from '@/components/log'
import { notFound } from 'next/navigation'

// This would eventually come from a database or CMS
const blogPosts: Record<string, {
    slug: string
    title: string
    excerpt: string
    content: string
    category: string
    image: string
    date: string
    readTime: string
    author: string
}> = {
    'progressive-overload-explained': {
        slug: 'progressive-overload-explained',
        title: 'Progressive Overload: The Only Principle That Matters',
        excerpt: 'Understanding the single most important concept for building strength. Everything else is just details.',
        content: `
      <p>If you take away one thing from this article, let it be this: <strong>progressive overload is the only principle that drives strength adaptation.</strong></p>

      <p>Not muscle confusion. Not feeling the burn. Not training to failure. Not perfect form. Not optimal rep ranges.</p>

      <p>Progressive overload.</p>

      <h2>What Is Progressive Overload?</h2>

      <p>Progressive overload means gradually increasing the demands placed on your body during training. In practical terms: <strong>lift more weight over time.</strong></p>

      <p>That's it. That's the entire principle.</p>

      <p>If you squat 135 lbs for 3 sets of 5 reps today, and six months from now you're squatting 225 lbs for 3 sets of 5 reps, you got stronger. The progressive increase in load forced your body to adapt.</p>

      <h2>Why It's the Only Thing That Matters</h2>

      <p>Your body adapts to stress. When you lift a weight that challenges your current capacity, your body responds by getting stronger to handle that stress more easily next time.</p>

      <p>But here's the key: <strong>if the stress doesn't increase, neither does your strength.</strong></p>

      <p>You can do the same workout with the same weight for years. Perfect form. Great technique. Intense effort. But if the weight on the bar never goes up, you won't get stronger.</p>

      <h2>How to Apply Progressive Overload</h2>

      <p>For beginners, it's simple: add weight to the bar every session.</p>

      <p>Here's what that looks like in practice:</p>

      <div class="lg-sheet"><div class="lg-sheet-head"><b>Squat · 3 × 5</b><small>Linear progression</small></div><table class="lg-table"><tbody><tr><td class="t-day">Session 1</td><td class="r t-weight">135 lb</td><td class="r">✓</td></tr><tr><td class="t-day">Session 2</td><td class="r t-weight">140 lb</td><td class="r">✓</td></tr><tr><td class="t-day">Session 3</td><td class="r t-weight">145 lb</td><td class="r">✓</td></tr></tbody></table><p class="lg-note">Keep going until you miss reps. Then try it again.</p></div>

      <p>Every session, you add 5 lbs. You keep doing this until you can't complete all your reps. Then you try again. Eventually you succeed and keep progressing.</p>

      <p>This is called <strong>linear progression</strong>, and it works incredibly well for beginners because you can recover from and adapt to each session quickly enough to progress every workout.</p>

      <h2>When Linear Progression Stops Working</h2>

      <p>Eventually, you can't add weight every session. That's normal. You're no longer a beginner—you're an intermediate lifter.</p>

      <p>At this point, progressive overload still matters. You just need to apply it differently:</p>

      <ul>
        <li>Add weight weekly instead of every session</li>
        <li>Add reps before adding weight</li>
        <li>Use periodization to manage fatigue and peak strength</li>
      </ul>

      <p>But the principle remains: <strong>you must progressively increase the demands on your body to continue getting stronger.</strong></p>

      <h2>Common Mistakes</h2>

      <p><strong>Mistake #1: Chasing the pump instead of progression.</strong> The pump feels good. It doesn't build strength. Add weight to the bar.</p>

      <p><strong>Mistake #2: Changing exercises constantly.</strong> You can't progressively overload if you're doing different exercises every workout. Stick with the basics and get stronger at them.</p>

      <p><strong>Mistake #3: Overthinking accessory work.</strong> Accessories are useful, but they're not where you build your foundation. Squat, bench, deadlift. Add weight. Everything else is secondary.</p>

      <h2>The Bottom Line</h2>

      <p>Getting stronger is simple: lift progressively heavier weights over time.</p>

      <p>Not complicated. Not easy. But simple.</p>

      <p>Stop worrying about optimal rep ranges, perfect exercise selection, and advanced techniques. Focus on progressive overload. Everything else is just details.</p>
    `,
        category: 'Training',
        image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
        date: 'January 6, 2026',
        readTime: '8 min read',
        author: 'Octavio Sanchez'
    },
    'stop-program-hopping': {
        slug: 'stop-program-hopping',
        title: 'Stop Program Hopping',
        excerpt: 'Why switching programs every 6 weeks is killing your progress.',
        content: `
      <p>You've been training for two years. Maybe three. But your lifts haven't moved in months.</p>

      <p>You started with Starting Strength. Switched to 5/3/1 after three months. Tried nSuns for a while. Now you're on some custom program you found on Reddit.</p>

      <p>Sound familiar?</p>

      <p>You're not getting stronger because <strong>you keep switching programs before they have a chance to work.</strong></p>

      <h2>Why Program Hopping Kills Progress</h2>

      <p>Here's the thing about strength training: <strong>adaptation takes time.</strong></p>

      <p>When you start a new program, the first few weeks aren't building strength—they're teaching your nervous system the movement patterns and building work capacity for that specific training style.</p>

      <p>The real progress starts after that initial adaptation period. But most people switch programs right when they're about to see results.</p>

      <h2>The Pattern</h2>

      <p>It goes like this:</p>

      <ul>
        <li><strong>Week 1-2:</strong> New program feels fresh. You're motivated. Everything feels great.</li>
        <li><strong>Week 3-4:</strong> Starting to feel challenging. You're adapting to the volume and intensity.</li>
        <li><strong>Week 5-6:</strong> It's getting hard. Progress isn't as fast as week 1. Maybe this program isn't optimal?</li>
        <li><strong>Week 7:</strong> You find a new program that promises better results. Switch immediately.</li>
      </ul>

      <p>Repeat this cycle every 6-8 weeks for two years, and you'll have made virtually no progress despite "trying everything."</p>

      <h2>What Actually Works</h2>

      <p>Pick a proven program. Run it for at least 12 weeks. Preferably longer.</p>

      <p>Not because the program is magic. But because <strong>consistency is what drives adaptation.</strong></p>

      <p>A mediocre program followed consistently for a year will produce better results than the "optimal" program you abandon after six weeks.</p>

      <h2>How Long Should You Run a Program?</h2>

      <p>For beginners: Until linear progression stops working. This could be 3-6 months or longer.</p>

      <p>For intermediates: At least one full training cycle. Usually 12-16 weeks.</p>

      <p>For advanced lifters: Through a complete training block, including a proper peak. Often 16-20 weeks.</p>

      <p>The point is: <strong>long enough to actually adapt to the training stimulus.</strong></p>

      <h2>When It's Actually Time to Switch</h2>

      <p>There are legitimate reasons to change programs:</p>

      <ul>
        <li>You've run the program to its conclusion and progressed as far as it will take you</li>
        <li>Your goals have changed (powerlifting meet prep vs general strength)</li>
        <li>Life circumstances changed (can only train 2 days instead of 4)</li>
        <li>You're injured and need to modify training</li>
      </ul>

      <p>Notice what's NOT on that list: "I saw a new program on YouTube" or "This feels hard."</p>

      <h2>The Bottom Line</h2>

      <p>Stop looking for the perfect program. Pick a proven one and stick with it long enough for it to work.</p>

      <p>The program doesn't matter nearly as much as you think. Your consistency matters more than anything else.</p>
    `,
        category: 'Training',
        image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
        date: 'January 5, 2026',
        readTime: '6 min read',
        author: 'Octavio Sanchez'
    },
    'beginner-mistakes': {
        slug: 'beginner-mistakes',
        title: '5 Mistakes Every Beginner Makes',
        excerpt: 'Learn from my failures so you don\'t waste years like I did.',
        content: `
      <p>I wasted years making the same mistakes every beginner makes.</p>

      <p>Not because I was lazy. Not because I wasn't trying. But because I believed the fitness industry's lies about what actually matters.</p>

      <p>Here are the five biggest mistakes I made—and how you can avoid them.</p>

      <h2>Mistake #1: Doing Too Many Exercises</h2>

      <p>When I started training, I thought more was better. I'd do 15 different exercises in a single workout.</p>

      <p>Chest day: Flat bench, incline bench, decline bench, cable flies, dumbbell flies, push-ups, dips...</p>

      <p>I wasn't getting stronger. I was just exhausting myself.</p>

      <p><strong>The fix:</strong> Focus on 3-5 compound movements. Squat, bench, deadlift, overhead press, rows. That's it. Master these before worrying about accessories.</p>

      <h2>Mistake #2: Changing Programs Every Month</h2>

      <p>I'd see a new program on YouTube or Reddit. It promised faster results. I'd switch immediately.</p>

      <p>I never stuck with anything long enough to see if it worked.</p>

      <p><strong>The fix:</strong> Pick one program. Run it for at least 12 weeks. Stick with it even when it gets hard. Consistency beats optimization.</p>

      <h2>Mistake #3: Not Tracking Anything</h2>

      <p>I'd go to the gym and "wing it." Pick whatever weight felt right that day. Hope I was making progress.</p>

      <p>Spoiler: I wasn't.</p>

      <p><strong>The fix:</strong> Write down every workout. Every set, every rep, every weight. If you don't track it, you can't improve it.</p>

      <h2>Mistake #4: Training to Absolute Failure Every Set</h2>

      <p>I thought every set needed to be a max effort. Grind out that last rep. Push until I couldn't move the bar.</p>

      <p>I was constantly sore, never recovered, and my progress stalled.</p>

      <p><strong>The fix:</strong> Leave 1-2 reps in the tank most of the time. Train hard, not stupid. Save failure sets for the occasional AMRAP set.</p>

      <h2>Mistake #5: Ignoring Progressive Overload</h2>

      <p>This is the biggest one. I'd use the same weights workout after workout. I thought as long as I was working hard, I'd get stronger.</p>

      <p>I was wrong.</p>

      <p><strong>The fix:</strong> Add weight to the bar consistently. Even if it's just 5 lbs, progression is what drives adaptation. No progression = no results.</p>

      <h2>The Common Thread</h2>

      <p>Notice the pattern? Every mistake came from overcomplicating training.</p>

      <p>The solution is simple: Pick basic movements. Follow a program. Track your workouts. Add weight over time.</p>

      <p>That's it. That's how you get strong.</p>

      <p>Everything else is noise.</p>
    `,
        category: 'Training',
        image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
        date: 'January 4, 2026',
        readTime: '7 min read',
        author: 'Octavio Sanchez'
    },
    'squat-form-basics': {
        slug: 'squat-form-basics',
        title: 'Squat Form: The Basics',
        excerpt: 'Master the most important lift with these fundamental cues.',
        content: `
    <p>The squat is the foundation of strength training. It builds your legs, your back, your core—everything.</p>

    <p>But most beginners overcomplicate it. They watch 47 different YouTube videos, each one contradicting the last. They get paralyzed trying to find the "perfect" technique.</p>

    <p>Here's the truth: <strong>good squat form is simpler than you think.</strong></p>

    <h2>The Setup</h2>

    <p>Before you even unrack the bar, you need a proper setup.</p>

    <p><strong>Bar Position:</strong> High bar (on your traps) or low bar (on your rear delts). Pick one and stay consistent. Most people find low bar easier on their knees and allows them to lift more weight.</p>

    <p><strong>Grip:</strong> Hands just outside your shoulders. Squeeze the bar hard. Create tension in your upper back.</p>

    <p><strong>Foot Position:</strong> Stance slightly wider than shoulder width. Toes pointed out 15-30 degrees. Whatever feels natural and stable.</p>

    <h2>The Unrack</h2>

    <p>Step under the bar. Get tight. Take a big breath into your belly. Brace hard.</p>

    <p>Stand up with the bar. Don't walk it out ten feet. Three steps maximum:</p>

    <ul>
      <li><strong>Step 1:</strong> One foot back</li>
      <li><strong>Step 2:</strong> Other foot back</li>
      <li><strong>Step 3:</strong> Adjust if needed</li>
    </ul>

    <p>That's it. Don't waste energy on an elaborate walkout. <strong>YOU LOOK GAY!</strong></p>

    <h2>The Descent</h2>

    <p>This is where most people mess up. They think too much and forget the basics.</p>

    <p><strong>Big breath.</strong> Fill your belly with air. Brace like someone's about to punch you in the gut.</p>

    <p><strong>Break at the hips and knees simultaneously.</strong> Not hips first. Not knees first. Both at the same time.</p>

    <p><strong>Knees track out over your toes.</strong> Don't let them cave in. Don't force them out artificially. Just let them track naturally over your feet.</p>

    <p><strong>Depth:</strong> Hip crease below the top of your knee. That's parallel. Go there or slightly below. You don't need ass-to-grass unless you're competing in weightlifting.</p>

    <p><strong>Back angle:</strong> Your torso will lean forward. That's normal, especially with low bar. Just keep your chest up and your back tight.</p>

    <h2>The Ascent</h2>

    <p>Stand up. That's the cue. Just stand up.</p>

    <p>Don't overthink it. Push through your whole foot. Keep your chest up. Drive your hips forward.</p>

    <p><strong>Common mistake:</strong> Shooting your hips up first, which turns the squat into a good morning. Keep your chest and hips rising together.</p>

    <p>Lock out at the top. Breathe. Reset. Repeat.</p>

    <h2>Common Form Issues</h2>

    <p><strong>Knees caving in (valgus collapse):</strong> Usually a strength issue, not a form issue. Cue "knees out" but don't overdo it. Build your glutes and adductors.</p>

    <p><strong>Losing tightness in the hole:</strong> You're probably not bracing hard enough. Take a bigger breath. Brace harder before you descend.</p>

    <p><strong>Good morning squat:</strong> Your hips shoot up first, leaving your chest down. Stay more upright on the descent. Think "chest up" as you come out of the hole.</p>

    <p><strong>Heels coming up:</strong> Either your ankle mobility sucks, or you're shifting your weight forward. Keep weight distributed evenly across your whole foot. Squat shoes can help if mobility is the issue.</p>

    <h2>How to Practice</h2>

    <p>Start with just the bar. Get 50-100 reps with perfect form before adding weight.</p>

    <p>Film yourself from the side. Check:</p>

    <ul>
      <li>Are you hitting depth?</li>
      <li>Is your back staying tight?</li>
      <li>Are your knees tracking properly?</li>
      <li>Is the bar path relatively vertical?</li>
    </ul>

    <p>When those look good, add weight. Progress slowly. Don't sacrifice form to hit arbitrary numbers.</p>

    <h2>The Cues That Actually Matter</h2>

    <p>Here are the only cues you need to think about:</p>

    <ul>
      <li><strong>Setup:</strong> "Proud chest, chin down, big breath, knees out, hips back"</li>
      <li><strong>Descent:</strong> "Break at hips, drop down"</li>
      <li><strong>Hole:</strong> "Stay tight"</li>
      <li><strong>Ascent:</strong> "Stand up"</li>
    </ul>

    <p>That's it. Everything else is just noise.</p>

    <h2>The Bottom Line</h2>

    <p>Good squat form isn't complicated:</p>

    <ul>
      <li>Proud chest</li>
      <li>Chin down</li>
      <li>Big breath</li>
      <li>Knees out</li>
      <li>Hips back</li>
      <li>Drop down</li>
      <li>Stand up</li>
    </ul>

    <p>Stop overthinking it. Practice with light weight until it feels natural. Then add weight progressively.</p>

    <p>The perfect squat doesn't exist. Good enough technique + consistent progressive overload = results.</p>

    <p>Everything else is just details.</p>
  `,
        category: 'Technique',
        image: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg',
        date: 'January 3, 2026',
        readTime: '10 min read',
        author: 'Octavio Sanchez'
    },
    'training-consistency': {
        slug: 'training-consistency',
        title: 'Consistency > Perfection',
        excerpt: 'Why showing up beats optimization every single time.',
        content: `
    <p>You're looking for the perfect program. The optimal rep range. The ideal training split.</p>

    <p>Meanwhile, the guy who just shows up three times a week and adds weight to the bar is getting stronger than you.</p>

    <p>Here's what nobody wants to hear: <strong>consistency matters more than optimization.</strong></p>

    <h2>The Myth of the Perfect Program</h2>

    <p>There is no perfect program. There's no magic combination of sets, reps, and exercises that will unlock gains faster than everything else.</p>

    <p>5x5 works. 5/3/1 works. Starting Strength works. Texas Method works. Even a mediocre program works if you follow it consistently.</p>

    <p>You know what doesn't work? Switching programs every six weeks because you read about something "better."</p>

    <p>The program doesn't matter nearly as much as showing up and doing the work.</p>

    <h2>Perfect Attendance > Perfect Execution</h2>

    <p>Would you rather:</p>

    <ul>
      <li><strong>Option A:</strong> Train three times a week for a year with "good enough" technique</li>
      <li><strong>Option B:</strong> Train sporadically with perfect form when motivation strikes</li>
    </ul>

    <p>Option A wins. Every time.</p>

    <p>The guy who shows up consistently with decent form will outlift the perfectionist who only trains when conditions are ideal.</p>

    <p>Consistency builds strength. Perfection builds excuses.</p>

    <h2>The 80% Rule</h2>

    <p>Here's a framework that changed how I think about training:</p>

    <p><strong>80% execution × 100% consistency > 100% execution × 50% consistency</strong></p>

    <p>Let's say you have a workout planned. You're tired. Work was stressful. You don't feel optimal.</p>

    <p>The perfectionist skips the workout. "I'll wait until I can give it 100%."</p>

    <p>The consistent lifter goes anyway. Maybe they drop the weight 10%. Maybe they cut a set. But they show up and do the work.</p>

    <p>Over a year, who makes more progress?</p>

    <p>The consistent lifter. Not even close.</p>

    <h2>Momentum Matters More Than You Think</h2>

    <p>Missing one workout isn't a big deal. Missing two in a row starts to build a pattern. Missing three and you're off the wagon.</p>

    <p>Consistency builds momentum. Momentum makes showing up easier. When showing up is easy, progress is inevitable.</p>

    <p>Break that momentum and everything gets harder. You lose your rhythm. Your strength drops. You have to rebuild from scratch.</p>

    <p>Protect your momentum above everything else.</p>

    <h2>Good Enough Is Good Enough</h2>

    <p>Your form doesn't need to be perfect. It needs to be safe and good enough to progress.</p>

    <p>Your program doesn't need to be optimal. It needs to include progressive overload and compound movements.</p>

    <p>Your recovery doesn't need to be perfect. Get decent sleep, eat enough protein, and you'll be fine.</p>

    <p>Stop using "not perfect" as an excuse to avoid doing the work.</p>

    <h2>The Consistency Checklist</h2>

    <p>Want to build consistency? Follow these rules:</p>

    <ul>
      <li><strong>Schedule your workouts.</strong> They're appointments. Treat them like work meetings.</li>
      <li><strong>Train at the same time each day.</strong> Builds habit and routine.</li>
      <li><strong>Have a backup plan.</strong> Can't make your full workout? Do a shortened version. Something is better than nothing.</li>
      <li><strong>Track your attendance.</strong> Mark an X on the calendar every training day. Don't break the chain.</li>
      <li><strong>Lower the bar when needed.</strong> Sick? Tired? Stressed? Reduce intensity but still show up.</li>
    </ul>

    <h2>When Perfectionism Actually Helps</h2>

    <p>Don't get me wrong—there's a time for optimization. But it's not when you're a beginner.</p>

    <p>Perfectionism helps when:</p>

    <ul>
      <li>You've been training consistently for years</li>
      <li>You're preparing for a competition</li>
      <li>You're addressing a specific weakness or injury</li>
    </ul>

    <p>Until then? Just show up and do the work.</p>

    <h2>The Guy Who Just Shows Up</h2>

    <p>I've seen this pattern hundreds of times:</p>

    <p><strong>Guy A</strong> obsesses over details. Reads every study. Debates rep ranges online. Switches programs constantly. Trains when he "feels optimal."</p>

    <p><strong>Guy B</strong> follows a simple program. Shows up three times a week. Adds weight when he can. Doesn't overthink it.</p>

    <p>Five years later, Guy B is strong. Guy A is still searching for the perfect program.</p>

    <p>Don't be Guy A. Guy A is gay.</p>

    <h2>The Bottom Line</h2>

    <p>Getting strong isn't complicated:</p>

    <ul>
      <li>Pick a simple program</li>
      <li>Show up consistently</li>
      <li>Add weight over time</li>
      <li>Repeat for years</li>
    </ul>

    <p>That's it. That's the formula.</p>

    <p>Stop looking for shortcuts. Stop waiting for perfect conditions. Stop overthinking every detail.</p>

    <p>Just show up and do the work.</p>

    <p>Consistency always wins.</p>
  `,
        category: 'Mindset',
        image: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg',
        date: 'January 2, 2026',
        readTime: '5 min read',
        author: 'Octavio Sanchez'
    }

}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = blogPosts[params.slug]
    return post ? { title: post.title, description: post.excerpt } : {}
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug]

    if (!post) {
        notFound()
    }

    return (
        <main className="lg-wrap">
            <Entry label="Article" sub={post.readTime.replace(' read', '')}>
                <p className="lg-byline">
                    <Link href="/blog">← Articles</Link> · {post.date} · {post.author}
                </p>
                <h1 className="lg-h1 lg-post-title">{post.title}</h1>
                <p className="lg-lede lg-muted">{post.excerpt}</p>
                <div className="lg-post" dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="lg-ctas" style={{ marginTop: 28 }}>
                    <Link className="lg-link" href="/book">Read the book</Link>
                    <Link className="lg-link" href="/coaching">Get coached</Link>
                </div>
            </Entry>
        </main>
    )
}

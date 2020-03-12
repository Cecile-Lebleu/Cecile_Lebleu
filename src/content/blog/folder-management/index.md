---
path: folder-management
date: 2019-06-18T15:10:00.000Z
title: How I manage my projects, folders, and files
description: Take a look at my project filesystem, and how I scaled my organization to cover development and graphic design projects.
---

This week I'd like to share my project filesystem, how I manage it, and why I do it this way. My intention is not to say "this is the best filesystem" or "you should manage your files this way", because different people will need different methods, and there is rarely a true one-size-fits-all approach —to anything. That said, this is the system that works for me, and that I've developed over the past 5+ years. Use it, modify it, and leave a like if you find it useful!

For a bit of background, I am a designer before being a developer, have been at it since around 2014, when I started drawing letters, learning graphic design and brand identity design. I have been developing (and therefore having to manage files for) very different types of projects throughout the years, including designing a [wonderful card game about cyber witches](https://cecilelebleu.com/hexadecimate/), and helping design a [diary app interface design](https://pureformstudio.com/diarly). 

Since I started becoming a dev, I've modified my folder system to better fit a developer's needs, like easier access through the command line and IDEs, Git, and so on.

Without further adieu, let's get to it. I promise—it's not complicated. We'll be tackling from the top down, from high level to detail. *I'm on a Mac, but this system is relatively basic and can be implemented in any OS or environment.*

## My Project Management Filesystem

First of all, the most important folder: `allProjects`. Here, you guessed it, are all my projects. This folder is constantly backed up in two clouds (in case hell's fire rains on one cloud, the other cloud, or my local computer). This is the main, the favorite, the first folder I see when I open a finder window, command line, and editor.

In there, there are three folders: `+Archives`, `+Lab`, and `+Study`, followed by around 10 project folders. Let's look at each of the three main folders in detail. I put a `+` sign before the names so they'll always appear first.

```
v allProjects
|  > +Archives
|  > +Lab
|  > +Study
|  > ActiveProject
   ...
|  > AnotherActiveProject
```

* `+Archives` contains all the projects that are completed, paused, or abandoned. In it, you'll find yearly folders, from `2014` to `2019`. Each of these contains one folder for each project that has been successfully completed and delivered, or any personal projects that are abandoned, or the most common, *paused until I know how to do it*.
* `+Lab` contains all the crazy creatures I'm imagining. Ideas, half-built things, apps in the earliest stages of development, and designs that only have a few letters drawn. I tend to keep each idea or creation in its own folder to keep it tidy.
* `+Study` is just as important. As any dev, I'm always learning. Here, I have a folder with the name of each *platform* I'm taking courses on. Let's take... [Per](https://dev.to/perborgen)'s [Scrimba](https://scrimba.com). In my `Scrimba` folder, I have a markdown file for each course or path, where I take notes, code snippets, summaries, etc. If it's a particularly big course, I may have a folder with multiple markdown files in it. Whenever I'm studying, I put my editor and browser side-by-side on full screen, and take notes while I go.

I mentioned I also have other folders next to the three `+` folders. These are all my active projects. This is my main working area, my priority. Whether they are client projects, projects with my partner, or projects of my own — if I'm working on it, it's here. It's at plain sight, so I know right away what I'm working on. When a small creature from the `+Lab` grows enough, I move it out into this wild area. If one of these projects goes for a while without updates, if I'm getting bored of it, or if I just can't continue without first learning something else, I move it into the `+Archives`. Also, I often take projects *out* of the archives and back to this main area, if I decide I want to start working on it again.

## Individual project folders

Most of the time, I'm working on projects located in my main working area. But I also play around in the `+Lab` and I spend a few hours every day in the `+Study` area. 

Each of the project folders has a mind of its own. No two projects are alike, so project folders tend to vary. When it's a development project, I'll usually set up a git repository in the project folder. But git with design projects is a big no-no — file sizes tend to grow enormously. Some can be connected to GitHub, but it really depends on the nature of the project. Some project folders have only one or two files, others can have multiple folder levels down and gigabytes of files.

## Visual Tree (TL;DR)

For us visual people, and for those who just want to see it, here's a visual outline.

```
v allProjects
|  v +Archives
|  |  > 2014
|  |  > 2015
|  |  > 2016
|  |  > 2017
|  |  v 2018
|  |  |  > FinishedProject
|  |  |  > FinishedClientProject
|  |  |  > PausedProject
|  |  > 2019
|  v +Lab
|  |  > SomeTest
|  |  > SomeOtherInvention
|  v +Study
|  |  > CodeCademy
|  |  > CS50
|  |  > FCC
|  |  > Scrimba
|  |  > Udemy
|  > ActiveProject
|  > ClientProject
|  > AnotherActiveProject
|  |  > ProjectSubfolder
|  > OneMoreActiveProject
|  v Website
|  |  index.html
|  |  style.css
|  > PersonalProject
...
```

### Notes

*Although Scrimba has its own note-taking and bookmarking tool, I like to take notes locally from every course where I learn something new. It's easier to find my notes and search through them, and I don't need an internet connection.*
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdIntegrationInstructions, MdQueryStats, MdCloudQueue, MdGroup, MdSecurity, MdSupportAgent } from 'react-icons/md'

const Features = () => {
  return (
    <section id='features' className="bg-white py-16 px-4">
      <h2 className="text-6xl font-bold text-center text-black mb-12">Product Features</h2>

      <VerticalTimeline lineColor="#FFBF23">
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdIntegrationInstructions />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>Seamless Integrations</h2>
          <p>Easily connect with your favorite tools and platforms for maximum productivity.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdQueryStats />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>Real-time Analytics</h2>
          <p>Make smart decisions with live data and performance metrics at your fingertips.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdCloudQueue />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>Scalable Infrastructure</h2>
          <p>Scale confidently without worrying about downtime or performance hits.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdGroup />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>Team Collaboration</h2>
          <p>Empower teams to work together with real-time updates and shared tools.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdSecurity />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>Enterprise-Grade Security</h2>
          <p>We ensure top-tier data protection and compliance across all systems.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000' }}
          iconStyle={{ background: '#FFBF23', color: '#000' }}
          icon={<MdSupportAgent />}
        >
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>24/7 Support</h2>
          <p>Our global support team is always ready to assist — anytime, anywhere.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default Features

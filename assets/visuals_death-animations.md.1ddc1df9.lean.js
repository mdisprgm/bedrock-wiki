import{_ as e,r as o,c as r,a,w as t,e as n,o as l,d as p}from"./404.md.ac93a67b.js";const E='{"title":"Custom Death Animations","description":"","frontmatter":{"title":"Custom Death Animations","tags":["intermediate"]},"headers":[{"level":2,"title":"Cancelling Death Animations","slug":"cancelling-death-animations"},{"level":3,"title":"Teleporting the Entity","slug":"teleporting-the-entity"},{"level":3,"title":"minecraft:instant_despawn","slug":"minecraft-instant-despawn"},{"level":3,"title":"Transformation to another entity","slug":"transformation-to-another-entity"},{"level":3,"title":"Cancelling the Animation","slug":"cancelling-the-animation"},{"level":2,"title":"Custom Death Animations","slug":"custom-death-animations"},{"level":3,"title":"Changing Damage Color Overlay","slug":"changing-damage-color-overlay"},{"level":3,"title":"Using Damage Sensor to Trigger Instant Despawn and One Item Drop","slug":"using-damage-sensor-to-trigger-instant-despawn-and-one-item-drop"},{"level":3,"title":"Detecting Death with Commands","slug":"detecting-death-with-commands"}],"relativePath":"visuals/death-animations.md","lastUpdated":1641725550991}',c={},u=n('',11),i=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:transformation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;into&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:death_animation_entity&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;transformation_sound&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;converted_to_zombified&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;keep_level&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;drop_inventory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;preserve_equipment&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;drop_equipment&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;block_assist_chance&quot;</span><span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;block_radius&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;block_max&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="cancelling-the-animation" tabindex="-1">Cancelling the Animation <a class="header-anchor" href="#cancelling-the-animation" aria-hidden="true">#</a></h3><p>We can also cancel the rotational value of the entity, allowing the entity to die more conventionally (particles, red-coloring, loot) without the 90-degree spin.</p><p>If you need more information about triggering animations from entity death, see <a href="/animation-controllers/death-commands.html">this document</a> on death effects.</p><p>Rotation needs to be applied to a bone parent to all other bones, with a pivot at [0,0,0], and the animation should only start when <code>!query.is_alive</code>.</p><p>Animation:</p>__VP_STATIC_END__`,6),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;rotation&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Math.min(Math.sqrt(Math.max(0, query.anim_time * 20 - 0.5) / 20 * 1.6), 1) * -90&quot;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Animation Controller:</p><p>(query.all_animations_finished is only needed for respawning entities, like players)</p>__VP_STATIC_END__`,3),b=p("RP/animation_controllers/custom_death.animation.controllers.json"),m=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.player.cancel_death_animaton&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;cancel_animation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;cancel_animation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;my.animation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive &amp;&amp; query.all_animations_finished&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Note that you will need attach animation and animations controller in <code>.entity.json</code> file of resource pack.</p><h2 id="custom-death-animations" tabindex="-1">Custom Death Animations <a class="header-anchor" href="#custom-death-animations" aria-hidden="true">#</a></h2><p>This part will explain how to customize death animation.</p><h3 id="changing-damage-color-overlay" tabindex="-1">Changing Damage Color Overlay <a class="header-anchor" href="#changing-damage-color-overlay" aria-hidden="true">#</a></h3><p>You can remove/customize entity damage color overlay.</p><p>Before starting, you must have the basics of render controller so check out the <a href="/visuals/entity-visuals-intro.html">tutorial</a> of render controllers.</p><p>To remove the damage overlay color of any entity you want when it gets damaged, we will use <code>is_hurt_color</code> and remove the damage overlay color when an entity receives damage from lava or fire use <code>on_fire_color</code>. First, you need to make the rgba values to 0 Here&#39;s the example of removing the damage and fire overlay color.</p>__VP_STATIC_END__`,8),d=p("RP/render_controllers/custom_death.render_controllers.json"),q=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.render.sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Texture.default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_hurt_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;on_fire_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The code above will remove the red damage overlay color.</p><p>You can also change the damage color overlay to different colors just by putting different values in rgba. You can check out various websites to get the rgba values of all colors. Here&#39;s another example in which the damage color overlay becomes pink.</p>__VP_STATIC_END__`,3),_=p("RP/render_controllers/custom_death.render_controllers.json"),h=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.render.kbg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Texture.default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_hurt_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.4&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.5&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;on_fire_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.4&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.5&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="using-damage-sensor-to-trigger-instant-despawn-and-one-item-drop" tabindex="-1">Using Damage Sensor to Trigger Instant Despawn and One Item Drop <a class="header-anchor" href="#using-damage-sensor-to-trigger-instant-despawn-and-one-item-drop" aria-hidden="true">#</a></h3><p>You can use the damage_sensor component to trigger an event upon fatal damage; this event adds a particular despawning component group containing the spawn_entity and instant_despawn components. Spawn_entity with 0 wait time will drop an item just before the entity is despawned. For simple entities like furniture, which only need one item, this is very convenient.</p><p>When an entity recieves fatal damage, an event is triggered that adds a dummy component. We can then use this dummy component to play the animation and using <code>minecraft:timer</code> we can have it despawn.</p><p>Please note that you will have to find another work for entities with an inventory. You should also ensure that the despawn component group is not added when the entity is spawned using the entity_spawned event. If you have a entity that performs other actions (movement and attacks) you will likely want to remove those components as well.</p><p>Here an example file in the BP</p>__VP_STATIC_END__`,6),y=p("BP/entities/entity.json"),g=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:entity&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:death&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;minecraft:spawn_entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;min_wait_time&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;spawn_item&quot;</span><span class="token operator">:</span><span class="token string">&quot;egg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;single_use&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;minecraft:is_sheared&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;looping&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;time&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token number">2.56</span><span class="token punctuation">,</span>
                        <span class="token number">2.56</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Change this to match your animation&#39;s time</span>
                    <span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:despawn&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;wiki:despawn&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;minecraft:instant_despawn&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:type_family&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;family&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&quot;cart&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;inanimate&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;width&quot;</span><span class="token operator">:</span><span class="token number">0.8</span><span class="token punctuation">,</span>
                <span class="token property">&quot;height&quot;</span><span class="token operator">:</span><span class="token number">0.5</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:health&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span>
                <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token number">8</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:physics&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:pushable&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;is_pushable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_pushable_by_piston&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token punctuation">{</span>
                                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_damage&quot;</span><span class="token punctuation">,</span>
                                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;fatal&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span><span class="token string">&quot;self&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span><span class="token string">&quot;wiki:death&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;cause&quot;</span><span class="token operator">:</span><span class="token string">&quot;fatal&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;wiki:death&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token string">&quot;wiki:death&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;wiki:despawn&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;add&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                            <span class="token string">&quot;wiki:despawn&quot;</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><p>Here an example file for the animation controller.</p>__VP_STATIC_END__`,2),f=p("RP/animation_controllers/animation_controller.entity.json"),v=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;blend_transition&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_sheared&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;blend_transition&quot;</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;death&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>Note: You can also spawn custom spawn egg items using the <code>minecraft:spawn_entity</code> component by setting <code>&quot;spawn_item&quot;</code> to be your entity&#39;s id and an affix of <code>spawn_egg</code>, and it will look something like this.</p>__VP_STATIC_END__`,2),w=p("BP/entities/my_entity.json#components"),T=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:spawn_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;min_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;spawn_item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:custom_zombie_spawn_egg&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;single_use&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>If you want to drop a loot table, you can trigger an event (as shown below) and summon another entity that have this component:</p>__VP_STATIC_END__`,2),A=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;minecraft:behavior.drop_item_for&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">&quot;seconds_before_pickup&quot;</span><span class="token operator">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cooldown&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
		<span class="token property">&quot;drop_item_chance&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;offering_distance&quot;</span><span class="token operator">:</span><span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;minimum_teleport_distance&quot;</span><span class="token operator">:</span><span class="token number">1024.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;target_range&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token number">64.0</span><span class="token punctuation">,</span>
			<span class="token number">64.0</span><span class="token punctuation">,</span>
			<span class="token number">64.0</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;teleport_offset&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token number">0.0</span><span class="token punctuation">,</span>
			<span class="token number">1.0</span><span class="token punctuation">,</span>
			<span class="token number">0.0</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;speed_multiplier&quot;</span><span class="token operator">:</span><span class="token number">1.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;search_range&quot;</span><span class="token operator">:</span><span class="token number">64</span><span class="token punctuation">,</span>
		<span class="token property">&quot;search_height&quot;</span><span class="token operator">:</span><span class="token number">64</span><span class="token punctuation">,</span>
		<span class="token property">&quot;search_count&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;goal_radius&quot;</span><span class="token operator">:</span><span class="token number">64.0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;entity_types&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;player&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;max_dist&quot;</span><span class="token operator">:</span><span class="token number">64</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;priority&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;loot_table&quot;</span><span class="token operator">:</span><span class="token string">&quot;loot_tables/entities/example.loot_table.json&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;time_of_day_range&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token number">0.0</span><span class="token punctuation">,</span>
			<span class="token number">1.0</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_despawn_event&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>And then despawn it through adding component group with instant_despawn through <code>wiki:my_despawn_event</code>.</p><h3 id="detecting-death-with-commands" tabindex="-1">Detecting Death with Commands <a class="header-anchor" href="#detecting-death-with-commands" aria-hidden="true">#</a></h3><p>Death detection with commands might be useful because it don&#39;t use <code>player.json</code></p>__VP_STATIC_END__`,4),C=p("BP/functions/detecting_death.mcfunction"),S=n(`__VP_STATIC_START__<div class="language-"><pre><code>tag @a add dead
tag @e[type=player] remove dead
execute @a[tag=dead, tag=!last_dead] ~ ~ ~ summon hatchibombotar:grave
tag @a[tag=dead, tag=!last_dead] add last_dead
tag @a[tag=!dead, tag=last_dead] remove last_dead
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This works because @a targets all players whereas @e[type=player] only targets alive players.</p><p>You can do whatever you want with that summoned entity</p><p>Don&#39;t forget to add this function into <a href="/commands/mcfunction.html#running-functions-through-tick-json">tick.json</a>.</p>__VP_STATIC_END__`,4);function x(P,D,I,j,V,N){const s=o("CodeHeader");return l(),r("div",null,[u,a(s),i,a(s),k,a(s,null,{default:t(()=>[b]),_:1}),m,a(s,null,{default:t(()=>[d]),_:1}),q,a(s,null,{default:t(()=>[_]),_:1}),h,a(s,null,{default:t(()=>[y]),_:1}),g,a(s,null,{default:t(()=>[f]),_:1}),v,a(s,null,{default:t(()=>[w]),_:1}),T,a(s),A,a(s,null,{default:t(()=>[C]),_:1}),S])}var B=e(c,[["render",x]]);export{E as __pageData,B as default};
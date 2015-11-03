var __PANEL_KEYS_ZCM__ = [];
function panel()
{
    var parent = this;

    this.createPanel = function(header, body)
    {
        var panel = $('<div />', { 'id' : parent.panelId,
                                   'class' : 'panel panel-default' });

        var panelHeading = $('<div />', { 'class' : 'clearfix row' });
        if (header)
            panelHeading.append(header);

        var panelBody = $('<div />', { 'class' : 'panel-body' });
        if (body)
            panelBody.append(body);

        var close = $('<div />', { 'class' : 'btn btn-xs glyphicon ' +
                                            'glyphicon-remove pull-right',
                                  'stlye' : 'z-index:99;' });
        close.on('click', parent.close);
        var pin = $('<div />', { 'class' : 'btn btn-xs glyphicon ' +
                                            'glyphicon-pushpin pull-right',
                                  'stlye' : 'z-index:99;' });
        pin.on('click', function(){
            $(this).toggleClass('active');

            if ($(this).hasClass('active'))
                parent.pinPanel();
            else
                parent.unpinPanel();
        });
        var tools = $('<div />', { 'class' : 'clearfix pull-right' }).append(close).append(pin);

        panelHeading.append(tools);
        panelHeading = $('<div />', { 'class' : 'panel-heading' }).append(panelHeading);

        panel.append(panelHeading);
        panel.append(panelBody);

        panel.resizable();
        panel.draggable();
        panel.css("cursor", "move");

        return panel;
    }

    this.unpinPanel = function()
    {
        $("#" + parent.panelId + ".panel").resizable({ disabled : false });
        $("#" + parent.panelId + ".panel").draggable({ disabled : false });
        $("#" + parent.panelId + ".panel").css("cursor", "move");
    }

    this.pinPanel = function()
    {
        $("#" + parent.panelId + ".panel").resizable({ disabled : true });
        $("#" + parent.panelId + ".panel").draggable({ disabled : true });
        $("#" + parent.panelId + ".panel").css("cursor", "");
    }

    this.close = function()
    {
        this.closed = true;
        $("#" + parent.panelId).remove();
    }

    this.isClosed = function()
    {
        return this.closed;
    }

    this.overrideClose = function(override)
    {
        this.close = override;
    }

    this.panelId = "panel-" + __PANEL_KEYS_ZCM__.push(__PANEL_KEYS_ZCM__.length - 1);
    this.closed = false;
}

/**
 * [pager description]
 * @author 徐文超
 */
$.fn.pager = function(options) {
	var page = parseInt(this.attr('page')),
		totalPage = this.attr('totalPage'),
		searchKey = window.location.search
		.replace(/\?/, ''),
		formForXpage = $('#for-xpager'),
		url = options.url == undefined ? formForXpage.prop('action') : options.url,
		sArray = window.location.search.split('&'),
		length = sArray.length,
		newArray = [];
	//参数缺失提示
	if (url == undefined) {
		console.error("you have to set up url!");
	}
	if (options.size == undefined) {
		console.error("you have to set up size!");
	}
	for (var i = 0; i < length; i++) {
		if (sArray[i].indexOf('size') == -1 && sArray[i].indexOf('page') == -1 && sArray[i] != '') {
			newArray.push('&' + sArray[i]);
		}
	}
	var str = newArray.join(''),
		previousURL = url + '?size=' + options.size + '&page=' + (page - 1) + str,
		nextURL = url + '?size=' + options.size + '&page=' + (page + 1) + str,
		firstURL = url + '?size=' + options.size + '&page=1' + str,
		lastURL = url + '?size=' + options.size + '&page=' + totalPage + '' + str;
	if (totalPage != 0) {
		this
			.html('<a class="x-first" href="' + firstURL + '">首页</a><a class="x-previous" href="' + previousURL + '">上一页</a><div class="x-pager-inform"><span class="x-currentPage">' + page + '</span> /<span class="x-totalPage">' + totalPage + '</span></div><a class="x-next" href="' + nextURL + '">下一页</a><a class="x-last" href="' + lastURL + '">末页</a>');
	}

	var currentPageBtn = $('.x-currentPage'),
		totalPageBtn = $('.x-totalPage'),
		previousBtn = $('.x-previous'),
		nextBtn = $('.x-next'),
		firstBtn = $('.x-first'),
		lastBtn = $('.x-last');

	//多种情况详细按钮组的渲染控制
	if (totalPage <= 7) {
		var oneArray = [];
		for (var i = 1; i <= totalPage; i++) {
			oneArray.push('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + i + str + '">' + i + '</a>');
		}
		$(oneArray.join('')).insertBefore(nextBtn);
	} else if (page <= 4) {
		var twoArray = [];
		for (var i = 1; i <= 6; i++) {
			twoArray.push('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + i + str + '">' + i + '</a>');
		}
		twoArray.push('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + totalPage + str + '">...' + totalPage + '</a>');
		$(twoArray.join('')).insertBefore(nextBtn);
	} else if (page > 4 && (totalPage - page) >= 3) {
		console.log('yes');
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=1' + str + '">' + 1 + '...</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + (page - 2) + str + '">' + (page - 2) + '</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + (page - 1) + str + '">' + (page - 1) + '</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + (page) + str + '">' + (page) + '</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + (page + 1) + str + '">' + (page + 1) + '</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + (page + 2) + str + '">' + (page + 2) + '</a>').insertBefore(nextBtn);
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + totalPage + str + '">...' + totalPage + '</a>').insertBefore(nextBtn);
	} else if ((totalPage - page) < 3) {
		$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=1' + str + '">' + 1 + '...</a>').insertBefore(nextBtn);
		for (var i = (totalPage - 5); i <= totalPage; i++) {
			$('<a class="little-page" href="' + url + '?size=' + options.size + '&page=' + i + str + '">' + i + '</a>').insertBefore(nextBtn);
		}
	}
	if (currentPageBtn.text() == 1) {
		previousBtn.addClass('x-disable');
		firstBtn.addClass('x-disable');
		// 如果当前在第一页，取消上一页按钮默认行为
		previousBtn.click(function() {
			return false;
		});
	}
	if (currentPageBtn.text() == totalPageBtn.text()) {
		nextBtn.addClass('x-disable');
		lastBtn.addClass('x-disable');
		// 如果当前在最后一页，取消下一页按钮默认行为
		nextBtn.click(function() {
			return false;
		});
	}
	$('.little-page').filter(function() {
		return $(this).text() == currentPageBtn.text();
	}).addClass('current');
}
